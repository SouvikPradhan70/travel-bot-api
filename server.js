const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "img"))); // Serving static images

const PORT = 3000;

const touristData = {
    "goa": {
        description: "Goa, India’s smallest state, is famous for its stunning beaches, vibrant nightlife, Portuguese heritage, and delicious seafood. It is a paradise for travelers seeking relaxation, adventure, and cultural experiences, with a unique blend of Indian and Western influences.",
        spots: [
            {
                name: "Baga Beach",
                wikipedia: "https://en.wikipedia.org/wiki/Baga_Beach",
                images: [
                    "/img/baga_beach.jpg",
                    "/img/baga_beach2.jpg",
                    "/img/baga_beach3.webp"
                ],
                description: "Baga Beach is one of the most popular beaches in North Goa, known for its golden sands, lively shacks, and thrilling water sports. Visitors can enjoy parasailing, jet skiing, and banana boat rides, or relax by the beachside cafes. The nightlife at Baga is equally vibrant, with clubs like Tito’s and Mambo’s attracting party lovers.",
                souvenir: "Handmade seashell jewelry.",
                nearest_locations: {
                    bus_stop: "Baga Bus Stop - 1.5 km",
                    railway_station: "Thivim Railway Station - 19 km",
                    hospital: "Primary Health Centre - 3 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Basilica of Bom Jesus",
                wikipedia: "https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus",
                images: [
                    "/img/basilica1.jpg",
                    "/img/basilica2.jpg",
                    "/img/basilica3.jpg"
                ],
                description: "A UNESCO World Heritage Site, the Basilica of Bom Jesus is one of Goa’s most revered churches, housing the mortal remains of St. Francis Xavier. Built in 1605, this baroque-style church is an architectural marvel, attracting pilgrims and history enthusiasts alike.",
                souvenir: "Religious artifacts and wooden crosses.",
                nearest_locations: {
                    bus_stop: "Old Goa Bus Stop - 500m",
                    railway_station: "Karmali Railway Station - 10 km",
                    hospital: "Old Goa Medical Centre - 2 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Dudhsagar Waterfalls",
                wikipedia: "https://en.wikipedia.org/wiki/Dudhsagar_Falls",
                images: [
                    "/img/Dudhsagar_Falls.jpg",
                    "/img/Dudhsagar_Falls2.jpg",
                    "/img/Dudhsagar_Falls3.webp"
                ],
                description: "Dudhsagar Falls, meaning ‘Sea of Milk,’ is one of India’s tallest waterfalls, cascading from a height of 310 meters. Located in the Bhagwan Mahavir Wildlife Sanctuary, the waterfall is a popular trekking and sightseeing destination, best visited during the monsoon season.",
                souvenir: "Locally made bamboo crafts.",
                nearest_locations: {
                    bus_stop: "Mollem Bus Stop - 12 km",
                    railway_station: "Kulem Railway Station - 14 km",
                    hospital: "Mollem Health Centre - 15 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }

            },
            {
                name: "Fort Aguada",
                wikipedia: "https://en.wikipedia.org/wiki/Fort_Aguada",
                images: [
                    "/img/Fort_Aguada.jpg",
                    "/img/Fort_Aguada2.jpg",
                    "/img/Fort_Aguada3.webp"
                ],
                description: "Built by the Portuguese in the 17th century, Fort Aguada is a well-preserved fort overlooking the Arabian Sea. It once served as a crucial defense structure and now stands as a popular tourist attraction with breathtaking sunset views.",
                souvenir: "Miniature fort models.",
                nearest_locations: {
                    bus_stop: "Mollem Bus Stop - 12 km",
                    railway_station: "Kulem Railway Station - 14 km",
                    hospital: "Mollem Health Centre - 15 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Anjuna Flea Market",
                wikipedia: "https://en.wikipedia.org/wiki/Anjuna",
                images: [
                    "/img/fleaMarket.webp",
                    "/img/fleaMarket2.jpeg",
                    "/img/fleaMarket3.jpg"
                ],
                description: "The Anjuna Flea Market is a shopper’s paradise, offering everything from bohemian jewelry to handcrafted souvenirs. Held every Wednesday, this market attracts both tourists and locals looking for unique finds and a lively shopping experience.",
                souvenir: "Handwoven bags and boho jewelry.",
                nearest_locations: {
                    bus_stop: "Mollem Bus Stop - 12 km",
                    railway_station: "Kulem Railway Station - 14 km",
                    hospital: "Mollem Health Centre - 15 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Palolem Beach",
                wikipedia: "https://en.wikipedia.org/wiki/Palolem_Beach",
                images: [
                    "/img/palolem1.jpg",
                    "/img/palolem2.jpg",
                    "/img/palolem3.jpg"
                ],
                description: "Palolem Beach is a pristine stretch of golden sand in South Goa, known for its peaceful ambiance, colorful beach huts, and kayaking experiences. The Silent Noise Parties held here are famous for offering a unique nightlife experience where guests wear wireless headphones to dance under the stars.",
                souvenir: "Handmade coconut shell products.",
                nearest_locations: {
                    bus_stop: "Mollem Bus Stop - 12 km",
                    railway_station: "Kulem Railway Station - 14 km",
                    hospital: "Mollem Health Centre - 15 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            }
        ],
        cost: "₹35,000 - ₹40,000/person",
        famous_foods: [
            {
                name: "Goan Fish Curry",
                image: "/img/goanFish.jpg",
                description: "Goan Fish Curry is a tangy and spicy dish made with fresh fish, coconut milk, and a blend of local spices. It is best enjoyed with steamed rice and is a staple in Goan cuisine."
            },
            {
                name: "Bebinca",
                image: "/img/Bebinca.webp",
                description: "Bebinca is a traditional Goan dessert made with layers of coconut milk, sugar, egg yolks, and ghee. This rich and flavorful cake is a must-try for those with a sweet tooth."
            },
            {
                name: "Pork Vindaloo",
                image: "/img/PorkVindaloo.jpg",
                description: "A famous Portuguese-influenced dish, Pork Vindaloo is a spicy and tangy curry made with marinated pork, vinegar, garlic, and red chilies. It is often served with warm bread or rice."
            },
            {
                name: "Xacuti",
                image: "/img/Xacuti.jpg",
                description: "Xacuti is a Goan-style chicken or lamb curry made with roasted coconut and an aromatic mix of spices. It is a flavorful and hearty dish enjoyed by both locals and tourists."
            },
            {
                name: "Feni",
                image: "/img/Feni.jpg",
                description: "Feni is a traditional Goan alcoholic beverage made from cashew apples or coconut. It has a strong flavor and is an integral part of Goan culture and celebrations."
            }
        ]
    },

    "odisha": {
        description: "Odisha, known as the 'Soul of India,' is famous for its ancient temples, tribal culture, and breathtaking landscapes. Home to the grand Rath Yatra and Odissi dance, Odisha blends spirituality with nature and adventure.",
        spots: [
            {
                name: "Jagannath Temple & Beach",
                wikipedia: "https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri",
                images: [
                    "/img/jagannath_temple.jpg",
                    "/img/jagannath_temple2.jpg",
                    "/img/puri_seaBeach2.jpg",
                    "/img/puri_seaBeach.jpg"
                ],
                description: "The Puri Jagannath Mandir is one of the most revered Hindu temples in India, dedicated to Lord Jagannath, a form of Lord Vishnu. Located in Puri, Odisha, it is part of the Char Dham pilgrimage sites. The temple, built in the 12th century by King Anantavarman Chodaganga Deva, is famous for its annual Rath Yatra (Chariot Festival), where the deities—Lord Jagannath, Balabhadra, and Subhadra—are taken on grand chariots through the streets. The temple's Mahaprasad is considered sacred, and its mystical architectural features, such as the flag always flying against the wind, add to its spiritual significance. The temple is open only to Hindus, and its rich traditions continue to attract millions of devotees.",
                souvenir: "Handmade wooden idols of Lord Jagannath.",
                nearest_locations: {
                    bus_stop: "Puri Bus Stand - 2 km",
                    railway_station: "Puri Railway Station - 1.5 km",
                    hospital: "District Headquarters Hospital - 3 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Konark Sun Temple",
                wikipedia: "https://en.wikipedia.org/wiki/Konark_Sun_Temple",
                images: [
                    "/img/konark_temple.jpg",
                    "/img/konark_temple2.webp",
                    "/img/konark_temple3.jpg",
                    "/img/konark_temple4.jpg"
                ],
                description: "The Konark Sun Temple, a UNESCO World Heritage Site in Odisha, is a 13th-century architectural marvel built by King Narasimhadeva I of the Eastern Ganga dynasty. Designed in the shape of a colossal chariot of the Sun God Surya, it features intricately carved wheels and sculptures depicting divine, human, and celestial figures. The temple is an outstanding example of Kalinga architecture and remains a major tourist attraction.",
                souvenir: "Miniature stone carvings of the temple.",
                nearest_locations: {
                    bus_stop: "Konark Bus Stop - 1 km",
                    railway_station: "Puri Railway Station - 35 km",
                    hospital: "Konark Health Centre - 2 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Chilika Lake",
                wikipedia: "https://en.wikipedia.org/wiki/Chilika_Lake",
                images: [
                    "/img/chilika_lake.jpg",
                    "/img/chilika_lake2.jpg",
                    "/img/chilika_lake3.webp",
                    "/img/chilika_lake4.jpg"
                ],
                description: "Chilika Lake, Asia’s largest coastal lagoon, is a paradise for nature lovers and bird watchers. Spread across Odisha’s coastline, it is home to migratory birds from Siberia during winter and houses the rare Irrawaddy dolphins. The lake’s Satpada region is famous for dolphin sightings, while Kalijai Temple, located on an island, is a revered pilgrimage site.",
                souvenir: "Hand-painted Pattachitra artwork of Chilika Lake.",
                nearest_locations: {
                    bus_stop: "Satpada Bus Stop - 2 km",
                    railway_station: "Balugaon Railway Station - 40 km",
                    hospital: "Satpada CHC - 3 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Lingaraj Temple",
                wikipedia: "https://en.wikipedia.org/wiki/Lingaraja_Temple",
                images: [
                    "/img/lingeraj_temple.jpg",
                    "/img/lingeraj_temple2.webp",
                    "/img/lingeraj_temple3.jpg"
                ],
                description: "The Lingaraj Temple in Bhubaneswar is one of Odisha’s oldest and largest temples, dedicated to Lord Shiva. Built in the 11th century, it is a prime example of Kalinga architecture, featuring intricate carvings and a towering 150-foot spire. The temple’s Bindu Sagar Lake is considered sacred, and the temple remains an important pilgrimage site, attracting thousands of devotees.",
                souvenir: "Stone-carved miniature temples.",
                nearest_locations: {
                    bus_stop: "Lingaraj Temple Bus Stop - 500 m",
                    railway_station: "Bhubaneswar Railway Station - 3 km",
                    hospital: "Capital Hospital - 4 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Daringbadi",
                wikipedia: "https://en.wikipedia.org/wiki/Daringbadi",
                images: [
                    "/img/daringbadi.jpg",
                    "/img/daringbadi2.webp",
                    "/img/daringbadi3.jpg",
                    "/img/daringbadi4.webp"
                ],
                description: "Known as the 'Kashmir of Odisha,' Daringbadi is a picturesque hill station located in the Kandhamal district. With an elevation of 3,000 feet, it is the only place in Odisha where snowfall occurs in winter. The region is famous for its lush green valleys, waterfalls, coffee plantations, and pine forests, making it a perfect retreat for nature lovers.",
                souvenir: "Organic coffee and tribal handicrafts.",
                nearest_locations: {
                    bus_stop: "Daringbadi Bus Stop - 1 km",
                    railway_station: "Berhampur Railway Station - 120 km",
                    hospital: "Daringbadi CHC - 1.5 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Simlipal National Park",
                wikipedia: "https://en.wikipedia.org/wiki/Simlipal_National_Park",
                images: [
                    "/img/similipal.jpg",
                    "/img/similipal2.jpg",
                    "/img/similipal3.jpg",
                    "/img/similipal4.webp"
                ],
                description: "Simlipal National Park, a UNESCO Biosphere Reserve, is Odisha’s largest wildlife sanctuary, located in Mayurbhanj district. It is home to Royal Bengal tigers, elephants, leopards, and over 200 species of birds. The park features picturesque waterfalls like Barehipani and Joranda, dense forests, and scenic meadows, offering a perfect escape for wildlife enthusiasts and trekkers.",
                souvenir: "Handcrafted wooden animal figurines.",
                nearest_locations: {
                    bus_stop: "Baripada Bus Stop - 20 km",
                    railway_station: "Balasore Railway Station - 70 km",
                    hospital: "Baripada District Hospital - 25 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Khandagiri & Udaygiri",
                wikipedia: "https://en.wikipedia.org/wiki/Udayagiri_and_Khandagiri_caves",
                images: [
                    "/img/khandagiri_udaygiri.jpg",
                    "/img/khandagiri_udaygiri2.webp",
                    "/img/khandagiri_udaygiri3.jpg",
                    "/img/khandagiri_udaygiri4.webp"
                ],
                description: "The Khandagiri and Udayagiri Caves, located in Bhubaneswar, Odisha, are ancient rock-cut caves that date back to the 2nd century BCE. Built during the reign of King Kharavela, these caves were used as monastic dwellings for Jain monks. The Udayagiri Caves have beautifully carved inscriptions and sculptures, while the Khandagiri Caves offer panoramic views of the city. The Rani Gumpha (Queen’s Cave) in Udayagiri is the most famous for its intricate carvings.",
                souvenir: "Miniature Rock Carvings – Small stone sculptures inspired by the cave carvings.",
                nearest_locations: {
                    bus_stop: "Khandagiri Bus Stop - 500 m",
                    railway_station: "Bhubaneswar Railway Station - 6 km",
                    hospital: "AIIMS Bhubaneswar - 8 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Hirakud Dam",
                wikipedia: "https://en.wikipedia.org/wiki/Hirakud",
                images: [
                    "/img/hirakud.jpg",
                    "/img/hirakud2.jpg",
                    "/img/hirakud3.jpg"
                ],
                description: "The Hirakud Dam, located on the Mahanadi River near Sambalpur, Odisha, is the longest earthen dam in the world, stretching over 25.8 km. Built in 1957, it plays a crucial role in flood control, irrigation, and hydroelectric power generation. The dam also forms the Hirakud Reservoir, which is a popular tourist spot offering boating, birdwatching, and scenic views from Gandhi Minar and Nehru Minar.",
                souvenir: "Sambalpuri Handloom Products – Famous for Sambalpuri sarees, dupattas, and fabrics, representing the culture of the region.",
                nearest_locations: {
                    bus_stop: "Sambalpur Bus Stop - 6 km",
                    railway_station: "Sambalpur Junction - 7 km",
                    hospital: "VIMSAR, Burla - 8 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            }
        ],
        cost: "₹20,000 - ₹25,000/person",
        famous_foods: [
            {
                name: "Dalma",
                image: "/img/dalma.jpg",
                description: "Dalma is a traditional Odia dish made with lentils (dal) and mixed vegetables like raw banana, papaya, and pumpkin, cooked with mild spices and tempered with ghee. Unlike regular dal, it does not use onion or garlic, making it a staple in temple cuisine, especially in Lord Jagannath’s Mahaprasad."
            },
            {
                name: "Pakhala Bhata",
                image: "/img/pakhala.jpg",
                description: "Pakhala Bhata is a unique fermented rice dish where cooked rice is soaked in water and curd overnight. It is enjoyed cold with fried vegetables, badi chura (sun-dried lentil cakes), and pickles. This dish is popular in summer as it provides relief from the heat and aids digestion."
            },
            {
                name: "Dahi Bara Aloo Dum",
                image: "/img/dahibara.jpg",
                description: "A popular street food of Odisha, Dahi Bara Aloo Dum combines soft lentil dumplings (Dahi Bara) soaked in curd with spicy Aloo Dum (potato curry). Often served with ghugni (yellow peas curry) and garnished with spices, it is a favorite among locals."
            },
            {
                name: "Chhena Poda",
                image: "/img/chena_poda.jpg",
                description: "Known as The King of Odia Desserts,' Chhena Poda is a baked sweet made with chhena (cottage cheese), sugar, and cardamom, caramelized to perfection. It is said to be Lord Jagannath’s favorite sweet and has a distinct smoky flavor due to the traditional baking process."
            },
            {
                name: "Macha Ghanta",
                image: "/img/macha_ghanta.jpg",
                description: "Macha Ghanta is a signature Odia fish curry, prepared with fried fish head, vegetables, and spices. It is often cooked during festivals and special occasions, especially as an offering to the deities. This dish is best enjoyed with hot steamed rice."
            }
        ]
    },
    "west_bengal": {
        description: "West Bengal,known for its rich cultural heritage, historical landmarks, and scenic landscapes, offers a perfect blend of tradition and modernity. From the colonial charm of Kolkata to the serene hills of Darjeeling, the state is a paradise for travelers.",
        spots: [
            {
                name: "Victoria Memorial",
                wikipedia: "https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata",
                images: [
                    "/img/victoriaMemorial.jpg",
                    "/img/victoriaMemorial2.jpg",
                    "/img/victoriaMemorial3.jpg"
                ],
                description: "The Victoria Memorial, a stunning white marble structure in Kolkata, is one of India's most famous landmarks. Built in memory of Queen Victoria, it now serves as a museum showcasing British-era artifacts and paintings.",
                souvenir: "Miniature Victoria Memorial models and books on Kolkata’s history.",
                nearest_locations: {
                    bus_stop: "Esplanade Bus Stop - 2 km",
                    railway_station: "Howrah Junction - 5 km",
                    hospital: "S.S.K.M. Hospital - 3 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Darjeeling",
                wikipedia: "https://en.wikipedia.org/wiki/Darjeeling",
                images: [
                    "/img/darjelling.jpg",
                    "/img/darjelling2.jpg",
                    "/img/darjelling3.jpg"
                ],
                description: "Darjeeling, the 'Queen of the Hills,' is famous for its breathtaking tea gardens, colonial architecture, and the UNESCO-listed Darjeeling Himalayan Railway.",
                souvenir: "Darjeeling Tea and handmade woolen shawls.",
                nearest_locations: {
                    bus_stop: "Chowk Bazaar Bus Stand - 1 km",
                    railway_station: "Darjeeling Railway Station - 2 km",
                    hospital: "Darjeeling District Hospital - 3 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Sundarbans National Park",
                wikipedia: "https://en.wikipedia.org/wiki/Sundarbans_National_Park",
                images: [
                    "/img/sundarban.jpg",
                    "/img/sundarban2.jpg",
                    "/img/sundarban3.jpg"
                ],
                description: "Home to the majestic Royal Bengal Tiger, Sundarbans is the largest mangrove forest in the world and a UNESCO World Heritage Site.",
                souvenir: "Wooden tiger figurines and honey from Sundarbans.",
                nearest_locations: {
                    bus_stop: "Canning Bus Stop - 45 km",
                    railway_station: "Canning Railway Station - 45 km",
                    hospital: "Canning Subdivision Hospital - 50 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Dakshineswar Kali Temple",
                wikipedia: "https://en.wikipedia.org/wiki/Dakshineswar_Kali_Temple",
                images: [
                    "/img/kaliMandir.webp",
                    "/img/kaliMandir2.jpg",
                    "/img/kaliMandir3.jpg"
                ],
                description: "A revered Hindu temple dedicated to Goddess Kali, located on the banks of the Hooghly River, known for its spiritual ambiance and historical significance.",
                souvenir: "Religious idols and Rudraksha malas.",
                nearest_locations: {
                    bus_stop: "Dakshineswar Bus Stop - 500 m",
                    railway_station: "Dakshineswar Railway Station - 1 km",
                    hospital: "R.G. Kar Medical College - 7 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            },
            {
                name: "Digha Beach",
                wikipedia: "https://en.wikipedia.org/wiki/Digha",
                images: [
                    "/img/digah.jpg",
                    "/img/digah2.jpg",
                    "/img/digah3.jpg"

                ],
                description: "Digha is a popular seaside resort town known for its golden beaches, water sports, and fresh seafood.",
                souvenir: "Seashell artifacts and handmade jewelry.",
                nearest_locations: {
                    bus_stop: "Digha Bus Stop - 1 km",
                    railway_station: "Digha Railway Station - 1 km",
                    hospital: "Digha State General Hospital - 3 km"
                },
                emergency_contacts: {
                    police: "100",
                    ambulance: "102",
                    fire: "101"
                }
            }
        ],
        cost: "₹25,000 - ₹35,000/person",
        famous_foods: [
            {
                name: "Rosogolla",
                image: "/img/rasagolla.webp",
                description: "A signature Bengali sweet made from chhena (cottage cheese) and soaked in sugar syrup. It’s soft, spongy, and a must-try dessert."
            },
            {
                name: "Macher Jhol",
                image: "/img/macherJhol.webp",
                description: "A classic Bengali fish curry cooked with potatoes, tomatoes, and a blend of aromatic spices, usually served with rice."
            },
            {
                name: "Shukto",
                image: "/img/Shukto.jpg",
                description: "A mildly bitter yet flavorful mixed vegetable dish, traditionally eaten at the beginning of a Bengali meal."
            },
            {
                name: "Mishti Doi",
                image: "/img/MishtiDoi.jpg",
                description: "A traditional Bengali dessert, Mishti Doi is sweetened yogurt that is fermented and served chilled."
            },
            {
                name: "Kathi Roll",
                image: "/img/kathiRoll.avif",
                description: "A street food delicacy from Kolkata, Kathi Roll is a paratha wrap filled with juicy kebabs, onions, and tangy sauces."
            }
        ]
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
            cost: touristData[state].cost,
            famous_foods: touristData[state].famous_foods
        });
    } else {
        res.json({ error: "State not found" });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
