const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "img"))); // Serving static images

const PORT = 3000;

const touristData = {
    "goa": {
        description: "Goa is India's party capital, famous for its sun-kissed beaches, Portuguese heritage, thrilling water sports, and vibrant nightlife. Known for its colonial-era churches and spicy Goan cuisine, it's a paradise for beach lovers and adventure seekers.",
        spots: [
            {
                name: "Baga Beach",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Baga_Beach_Goa.jpg",
                    "/img/baga_beach_1.jpg",
                    "/img/baga_beach_2.jpg"
                ],
                description: "Baga Beach is one of the most popular beaches in Goa, known for its vibrant nightlife and water sports.",
                food: {
                    name: "Goan Fish Curry",
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Goan_Fish_Curry.jpg",
                    description: "A tangy and spicy fish curry made with coconut, tamarind, and local spices."
                }
            },
            {
                name: "Dudhsagar Falls",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Dudhsagar_Falls.jpg",
                    "/img/dudhsagar_1.jpg",
                    "/img/dudhsagar_2.jpg"
                ],
                description: "Dudhsagar Falls is a four-tiered waterfall located on the Mandovi River, offering breathtaking views.",
                food: {
                    name: "Bebinca",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Goan_Bebinca.jpg",
                    description: "A traditional Goan dessert made with layers of coconut milk, eggs, and sugar."
                }
            }
        ],
        cost: "₹15,000 - ₹20,000/person"
    },
    "odisha": {
        description: "Odisha, known as the 'Soul of India,' is famous for its ancient temples, tribal culture, and breathtaking landscapes. Home to the grand Rath Yatra and Odissi dance, Odisha blends spirituality with nature and adventure.",
        spots: [
            {
                name: "Jagannath Temple & Puri Beach",
                images: [
                    "/img/jagannath_temple.jpg",
                    "/img/puri_beach.jpg"
                ],
                description: "The Lord Jagannath Temple in Puri is a sacred marvel of Kalinga architecture, famous for its Rath Yatra and divine Mahaprasad. Nearby, Puri Beach offers golden sands, mesmerizing sunrises, and thrilling water sports.",
                food: {
                    name: "Chhena Poda",
                    image: "/img/chena_poda.jpg",
                    description: "A caramelized cottage cheese dessert with a smoky flavor, famously called the 'Lord of Sweets.'"
                }
            },
            {
                name: "Konark Sun Temple",
                images: [
                    "/img/konark_temple.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/d/d6/Konark_Sun_Temple.jpg"
                ],
                description: "A 13th-century UNESCO World Heritage Site, this architectural marvel is shaped like a colossal chariot dedicated to the Sun God.",
                food: {
                    name: "Dalma",
                    image: "/img/dalma.jpg",
                    description: "A wholesome lentil dish with vegetables, offering an authentic taste of Odisha’s cuisine."
                }
            },
            {
                name: "Chilika Lake",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/1/14/Chilika_Lake_Boating.jpg",
                    "/img/chilika_boat.jpg"
                ],
                description: "Asia’s largest coastal lagoon, famous for migratory birds, serene boat rides, and playful Irrawaddy dolphins.",
                food: {
                    name: "Macha Ghanta",
                    image: "/img/macha_ghanta.jpg",
                    description: "A traditional fish curry made with potatoes, mustard seeds, and spices."
                }
            },
            {
                name: "Lingaraj Temple",
                images: [
                    "/img/lingaraj_temple.jpg"
                ],
                description: "A magnificent 11th-century temple dedicated to Lord Shiva in Bhubaneswar, known for its stunning Kalinga-style architecture.",
                food: {
                    name: "Khaja",
                    image: "/img/khaja.jpg",
                    description: "A crispy, sugar-dipped sweet, often served as temple prasad."
                }
            },
            {
                name: "Daringbadi",
                images: [
                    "/img/daringbadi.jpg"
                ],
                description: "The 'Kashmir of Odisha,' famous for pine forests, coffee plantations, and waterfalls.",
                food: {
                    name: "Pakhala Bhata",
                    image: "/img/pakhala.jpg",
                    description: "A fermented rice dish served with curd, vegetables, and fried fish."
                }
            },
            {
                name: "Simlipal National Park",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Simlipal_Tiger.jpg"
                ],
                description: "A stunning wildlife sanctuary home to tigers, elephants, and diverse flora.",
                food: {
                    name: "Mutton Kassa",
                    image: "/img/mutton_kassa.jpg",
                    description: "A spicy mutton dish cooked with mustard oil and rich spices."
                }
            }
        ],
        cost: "₹30,000 - ₹40,000/person"
    }
};

// API Endpoint
app.get("/tourist-info", (req, res) => {
    const state = req.query.state.toLowerCase();
    if (touristData[state]) {
        res.json({
            state,
            description: touristData[state].description,
            spots: touristData[state].spots,
            cost: touristData[state].cost
        });
    } else {
        res.json({ error: "State not found" });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
