const {Router} = require('express');
const path = require('path');
const catRouter = Router();
const {newPage, submitKittens} = require('../controllers/animalcontrol');

catRouter.get('/cats', newPage);

catRouter.get('/kittens', (req, res, next)=>{
  res.send(`<h3>click below for kittens</h3><form method="POST"><input type="text"><button type="submit">Push</button></form>`)
});

catRouter.post('/kittens', submitKittens);

module.exports = catRouter;
