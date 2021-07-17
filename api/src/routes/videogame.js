const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
const key = API_KEY;
const router = Router();

router.get('/:id', async function (req, res) {
    const { id } = req.params;
    try {
        if(id.includes("-")) { // primero busco el id en la DB
            const dbGames =  await Videogame.findOne({
                where: { id },
                include: {
                    model: Genre,
                    attributes: ["name"],
                    through: { attributes: [] },
                },
            });
            const gameInformation = {
                id: dbGames.id,
                name: dbGames.name,
                image: dbGames.image,
                rating: dbGames.rating,
                description: dbGames.description,
                released: dbGames.released,
                platforms: dbGames.platforms,
                createdAt: dbGames.createdAt,
                updateAt: dbGames.updateAt,
                genres: dbGames.genres.map((g) => g.name).join(", "),
            }
            return res.json(gameInformation);
        } else {
            const apiGames = await axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`); // busco el id en la API
            let X = apiGames.data;
            const gameInformation = {
                name: X.name,
                image: X.background_image,
                genres: X.genres && X.genres.map((g) => g.name).filter((g) => g !== null).join(", "),
                description: X.description_raw, // el _raw me saca las etiquetas html de la description
                released: X.released,
                rating: X.rating,
                platforms: X.platforms && X.platforms.map((g) => g.platform.name).filter((g) => g !== null).join(", "),
            };
            return res.json(gameInformation);
        }
    } catch (err) {
        res.status(404).json({ error: "ID not found" });
    }
});



module.exports = router;