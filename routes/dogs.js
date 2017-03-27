const { Router } = require('express');
const path = require('path');
const dogRouter = Router();
// const bodyParser = require('body-parser');

const {newPage, submitPuppies} = require('../controllers/animalcontrol');

// create application/json parser
// dogRouter.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));


dogRouter.get('/dogs', newPage);

dogRouter.get('/puppies', (req, res, next)=>{
  res.send(`<h2>Puppies!!!</h2><form method="POST"><input type="text" name="puppies"><button type="submit">push</button></form>`);
});

dogRouter.post('/puppies', submitPuppies);

module.exports = dogRouter;
