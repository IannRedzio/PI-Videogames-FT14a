const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { Genre } = require("../db");
const { API_KEY } = process.env;
const key = API_KEY;
const router = Router();

router.get('/', async function (req, res) {
    try {
        const genresAPI = await axios.get (`https://api.rawg.io/api/genres?key=${key}`); // saco la informacion de la api
        genresAPI.data.results.forEach((g) => {
            Genre.findOrCreate({
                where: { name : g.name }, // busco el nombre
            });
        });
        const genresDB = await Genre.findAll(); // lo guardo en la DB
        res.json(genresDB); 
    } catch (err) {
        res.status(404).json(err);
    }
});












module.exports = router;











