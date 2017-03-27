const {Router} = require('express');
const path = require('path');
const {newGame, submit } = require('../controllers/gameControl');
const gameRouter = Router();

gameRouter.get('/boardgames', newGame);

gameRouter.get('/videogames', (req, res, next)=>{
  console.log(`Fetching video games`);
  res.send(`<h3>Search for Games</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`);
});

gameRouter.post('/videogames', submit);

module.exports = gameRouter;
