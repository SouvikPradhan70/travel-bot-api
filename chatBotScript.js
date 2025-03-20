document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {
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
            const apiBaseUrl = "https://travel-api-1ya7.onrender.com";  // Hosted API
            const response = await fetch(`${apiBaseUrl}/tourist-info?state=${encodeURIComponent(userInput)}`);
            const data = await response.json();

            if (data.spots) {
                // Add state description first
                const descriptionMessage = document.createElement("div");
                descriptionMessage.textContent = `📜 About ${userInput.charAt(0).toUpperCase() + userInput.slice(1)}: ${data.description}`;
                descriptionMessage.style.margin = "10px";
                descriptionMessage.style.fontWeight = "bold";
                descriptionMessage.style.color = "black"; // Black text for description
                messagesDiv.appendChild(descriptionMessage);

                data.spots.forEach((spot) => {
                    const botMessage = document.createElement("div");
                    botMessage.style.margin = "10px";
                    botMessage.style.padding = "10px";
                    botMessage.style.borderRadius = "8px";
                    botMessage.style.backgroundColor = "rgba(0, 0, 0, 0.59)"; // Black with transparency
                    botMessage.style.color = "white"; // White text
                    botMessage.style.border = "1px solid rgba(255, 255, 255, 0.2)"; // Light white border
                    botMessage.style.boxShadow = "0px 4px 8px rgba(255, 255, 255, 0.1)";

                    const placeName = document.createElement("h3");
                    placeName.textContent = `📍 ${spot.name}`;
                    botMessage.appendChild(placeName);

                    if (spot.images && spot.images.length > 0) {
                        const imagesContainer = document.createElement("div");
                        imagesContainer.style.display = "flex";
                        imagesContainer.style.flexWrap = "wrap";
                        imagesContainer.style.gap = "5px";
                        imagesContainer.style.marginTop = "10px";
                        imagesContainer.style.justifyContent = "flex-start";

                        spot.images.forEach((imgSrc) => {
                            const imgElement = document.createElement("img");
                            imgElement.src = imgSrc;
                            imgElement.style.width = "130px";
                            imgElement.style.height = "130px";
                            imgElement.style.objectFit = "cover";

                            imagesContainer.appendChild(imgElement);
                        });

                        botMessage.appendChild(imagesContainer);
                    }

                    const placeDescription = document.createElement("p");
                    placeDescription.textContent = spot.description;
                    placeDescription.style.marginTop = "10px";
                    botMessage.appendChild(placeDescription);

                    if (spot.wikipedia) {
                        const wikiText = document.createElement("p");
                        wikiText.textContent = `🔎 Know more about the place - `;
                        wikiText.style.display = "inline";
                        wikiText.style.marginTop = "10px";
                        botMessage.appendChild(wikiText);

                        const wikiLink = document.createElement("a");
                        wikiLink.href = spot.wikipedia;
                        wikiLink.textContent = spot.name; // Place name instead of "Wikipedia"
                        wikiLink.target = "_blank";
                        wikiLink.style.color = "red";
                        wikiLink.style.textDecoration = "underline";
                        wikiLink.style.fontWeight = "bold"; // Bold text for Wikipedia link

                        wikiText.appendChild(wikiLink);
                    }

                    if (spot.souvenir) {
                        const souvenirText = document.createElement("p");
                        souvenirText.textContent = `🎁 Recommended Souvenir: ${spot.souvenir}`;
                        souvenirText.style.marginTop = "10px";
                        souvenirText.style.fontStyle = "italic";
                        botMessage.appendChild(souvenirText);
                    }

                    messagesDiv.appendChild(botMessage);
                });

                // Add famous food section
                if (data.famous_foods) {
                    const foodSection = document.createElement("div");
                    foodSection.style.margin = "10px";
                    foodSection.style.padding = "10px";
                    foodSection.style.borderRadius = "8px";
                    foodSection.style.backgroundColor = "rgba(0, 0, 0, 0.59)";
                    foodSection.style.color = "white";
                    foodSection.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                    foodSection.style.boxShadow = "0px 4px 8px rgba(255, 255, 255, 0.1)";
                    
                    const foodTitle = document.createElement("h3");
                    foodTitle.textContent = "🍽️ Famous Foods";
                    foodSection.appendChild(foodTitle);
                    
                    data.famous_foods.forEach((food) => {
                        const foodItem = document.createElement("div");
                        foodItem.style.marginTop = "10px";
                        
                        const foodName = document.createElement("h4");
                        foodName.textContent = food.name;
                        foodItem.appendChild(foodName);
                        
                        if (food.image) {
                            const foodImage = document.createElement("img");
                            foodImage.src = food.image;
                            foodImage.style.width = "100px";
                            foodImage.style.height = "100px";
                            foodImage.style.objectFit = "cover";
                            foodItem.appendChild(foodImage);
                        }
                        
                        const foodDesc = document.createElement("p");
                        foodDesc.textContent = food.description;
                        foodItem.appendChild(foodDesc);
                        
                        foodSection.appendChild(foodItem);
                    });
                    
                    messagesDiv.appendChild(foodSection);
                }
            } else {
                const botMessage = document.createElement("div");
                botMessage.textContent = "❌ Sorry, no information available for this location.";
                botMessage.style.margin = "10px";
                botMessage.style.color = "red";
                messagesDiv.appendChild(botMessage);
            }
        } catch (error) {
            alert("⚠️ Error connecting to the server.");
        }

        document.getElementById("user-input").value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
