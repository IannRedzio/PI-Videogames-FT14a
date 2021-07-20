const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
const key = API_KEY;
const router = Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", async function(req, res) {
    const { name } = req.query;
    try {
        if(name) {
            let dbGames = await Videogame.findAll({
                where: { name: { [Op.like]: `%${name}%` } },
                include: [Genre],
            });
            gamesDBResults = [];
            gamesDBFull = dbGames.map((X) => {
                gameDB = {
                    id: X.id,
                    name: X.name,
                    image: X.image,
                    rating: X.rating,
                    genres: X.genres.map((g) => g.name).join(", "),
                };
                gamesDBResults.push(gameDB);
            })
            let totalAPI = [];
            for(let i = 1; i < 4; i++) {
                try {
                  let apiGames = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${key}&page_size=33&page=${i}`);
                apiGames.data.results.map((X) => {
                    var game = {
                        id: X.id,
                        name: X.name,
                        rating: X.rating,
                        image: X.background_image,
                        genres: X.genres && X.genres.map((p) => p.name).filter((p) => p !== null).join(", "),
                    };
                    totalAPI.push(game);
                });  
                } catch (err) {
                    console.log("error en for", i);
                }
            }
            let concatGames = [...gamesDBResults, ...totalAPI]
            res.json(concatGames);
        }else {
            let gamesResults = [];
            let apiURL = `https://api.rawg.io/api/games?key=${key}`;
            for(let index = 0; index < 5; index++) {
                let games = (await axios.get(apiURL)).data;
                let dataGame = games.results.map((G) => {
                    var game = {
                        name: G.name,
                        image: G.background_image,
                        genres: G.genres.map((gen) => gen.name).filter((p) => p != null).join(", "),
                        id: G.id,
                        rating: G.rating,
                    };
                    return game;
                });
                apiURL = games.next;
                gamesResults = gamesResults.concat(dataGame);
            }
            let dbGames = await Videogame.findAll({ include: [Genre] });
            let jsonGames = dbGames.map((J) => J.toJSON());
            jsonGames.forEach((C) => {(C.genres = C.genres.map((genre) => genre.name).filter((p) => p != null).join(", "));});
            gamesResults = gamesResults.concat(jsonGames);
            res.json(gamesResults);
        }
    } catch(err) {
        res.status(400).json({err});
    }
})

module.exports = router;