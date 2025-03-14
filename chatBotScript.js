document.getElementById("send-button").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        const messagesDiv = document.getElementById("messages");

        // Add user message
        const userMessage = document.createElement("div");
        userMessage.textContent = userInput;
        userMessage.style.textAlign = "right";
        userMessage.style.margin = "10px";
        userMessage.style.color = "blue";
        messagesDiv.appendChild(userMessage);

        try {
            const response = await fetch(`http://localhost:3000/tourist-info?state=${encodeURIComponent(userInput)}`);
            const data = await response.json();

            if (data.spots) {
                // Add state description first
                const descriptionMessage = document.createElement("div");
                descriptionMessage.textContent = `📜 About ${userInput.charAt(0).toUpperCase() + userInput.slice(1)}: ${data.description}`;
                descriptionMessage.style.margin = "10px";
                descriptionMessage.style.fontWeight = "bold";
                descriptionMessage.style.color = "#333";
                messagesDiv.appendChild(descriptionMessage);

                data.spots.forEach((spot) => {
                    const botMessage = document.createElement("div");
                    botMessage.style.margin = "10px";
                    botMessage.style.padding = "10px";
                    botMessage.style.borderRadius = "8px";
                    botMessage.style.backgroundColor = "#f9f9f9";
                    botMessage.style.border = "1px solid #ddd";
                    botMessage.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";

                    // 📍 Place name
                    const placeName = document.createElement("h3");
                    placeName.textContent = `📍 ${spot.name}`;
                    botMessage.appendChild(placeName);

                    // 🌄 Place Images (Square Card Grid)
                    if (spot.images && spot.images.length > 0) {
                        const imagesContainer = document.createElement("div");
                        imagesContainer.style.display = "flex"; // Use flexbox
                        imagesContainer.style.flexWrap = "wrap"; // Allow wrapping
                        imagesContainer.style.gap = "5px"; // Reduced gap
                        imagesContainer.style.marginTop = "10px";
                        imagesContainer.style.justifyContent = "flex-start"; // Align images to the left

                        spot.images.forEach((imgSrc) => {
                            const imgWrapper = document.createElement("div");
                            imgWrapper.style.width = "130px"; // Square size
                            imgWrapper.style.height = "130px"; // Square size
                            imgWrapper.style.borderRadius = "10px";
                            imgWrapper.style.overflow = "hidden";
                            imgWrapper.style.boxShadow = "0px 2px 4px rgba(0,0,0,0.2)";
                            imgWrapper.style.backgroundColor = "#fff";

                            const imgElement = document.createElement("img");
                            imgElement.src = imgSrc;
                            imgElement.style.width = "100%";
                            imgElement.style.height = "100%";
                            imgElement.style.objectFit = "cover";

                            imgWrapper.appendChild(imgElement);
                            imagesContainer.appendChild(imgWrapper);
                        });

                        botMessage.appendChild(imagesContainer);
                    }

                    // 📖 Description
                    const placeDescription = document.createElement("p");
                    placeDescription.textContent = spot.description;
                    placeDescription.style.marginTop = "10px";
                    botMessage.appendChild(placeDescription);

                    messagesDiv.appendChild(botMessage);
                });

                // 💰 Trip cost
                const costMessage = document.createElement("div");
                costMessage.textContent = `💰 Approximate Trip Cost: ${data.cost}`;
                costMessage.style.margin = "10px";
                costMessage.style.fontWeight = "bold";
                costMessage.style.color = "green";
                messagesDiv.appendChild(costMessage);

                // Populate checkboxes for selecting multiple destinations
                populateDestinations(data.spots);

                // Show the travel planner form at the bottom
                showTravelPlanner();
            } else {
                const botMessage = document.createElement("div");
                botMessage.textContent = "❌ Sorry, no information available for this location.";
                botMessage.style.margin = "10px";
                botMessage.style.color = "red";
                messagesDiv.appendChild(botMessage);
            }
        } catch (error) {
            const botMessage = document.createElement("div");
            botMessage.textContent = "⚠️ Error connecting to the server. Please try again.";
            botMessage.style.margin = "10px";
            botMessage.style.color = "red";
            messagesDiv.appendChild(botMessage);
        }

        // Clear input field and scroll to bottom
        document.getElementById("user-input").value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});

// Function to populate destinations dynamically as checkboxes
function populateDestinations(spots) {
    const destinationContainer = document.getElementById("destination-options-container");
    destinationContainer.innerHTML = ""; // Clear previous checkboxes

    spots.forEach((spot) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "destination-checkbox";
        checkbox.value = spot.name;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + spot.name));
        destinationContainer.appendChild(label);
        destinationContainer.appendChild(document.createElement("br")); // Line break
    });
}

// Function to show the travel planner at the end of the messages
function showTravelPlanner() {
    const messagesDiv = document.getElementById("messages");
    let travelPlanner = document.getElementById("travel-planner-container");

    // Move the form inside the messages container so it appears at the bottom
    if (!messagesDiv.contains(travelPlanner)) {
        messagesDiv.appendChild(travelPlanner);
    }

    // Ensure the form is visible after the last message
    travelPlanner.style.display = "block";

    // Scroll to the bottom so the form is the last thing the user sees
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Enable Enter key to send message
document.getElementById("user-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.getElementById("send-button").click();
    }
});
// Event listener for "Generate Travel Plan" button
document.getElementById("submit-travel-plan").addEventListener("click", () => {
    const messagesDiv = document.getElementById("messages");

    // Get selected destinations
    const selectedDestinations = [];
    document.querySelectorAll(".destination-checkbox:checked").forEach((checkbox) => {
        selectedDestinations.push(checkbox.value);
    });

    // Get travel date and number of days
    const travelDate = document.getElementById("travel-date-input").value;
    const travelDays = parseInt(document.getElementById("travel-days-input").value, 10);

    // Validate inputs
    if (selectedDestinations.length === 0 || !travelDate || !travelDays) {
        alert("❌ Please select at least one destination, enter a date, and specify the number of days.");
        return;
    }

    // Generate a basic itinerary
    let itinerary = "<b>📍 Suggested Itinerary:</b><br>";
    let dayCount = 1;
    for (let i = 0; i < selectedDestinations.length; i++) {
        itinerary += `🗓️ <b>Day ${dayCount}:</b> Visit ${selectedDestinations[i]}<br>`;
        if (dayCount < travelDays) dayCount++; // Move to next day if more days are available
    }

    // Format travel plan message
    const travelPlanMessage = document.createElement("div");
    travelPlanMessage.style.margin = "10px";
    travelPlanMessage.style.padding = "10px";
    travelPlanMessage.style.borderRadius = "8px";
    travelPlanMessage.style.backgroundColor = "#e6f7ff";
    travelPlanMessage.style.border = "1px solid #0084ff";
    travelPlanMessage.style.fontWeight = "bold";

    travelPlanMessage.innerHTML = `
        ✅ <b>Your Travel Plan:</b><br>
        📅 <b>Date:</b> ${travelDate} <br>
        ⏳ <b>Duration:</b> ${travelDays} days <br>
        🏞️ <b>Destinations:</b> ${selectedDestinations.join(", ")}<br><br>
        ${itinerary}
    `;

    // Add the travel plan to chat window
    messagesDiv.appendChild(travelPlanMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Clear input fields after submission
    document.getElementById("travel-date-input").value = "";
    document.getElementById("travel-days-input").value = "";
    document.querySelectorAll(".destination-checkbox").forEach((checkbox) => {
        checkbox.checked = false;
    });
});