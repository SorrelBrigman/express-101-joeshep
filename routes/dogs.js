const { Router } = require('express');
const path = require('path');
const dogRouter = Router();
const bodyParser = require('body-parser');

// create application/json parser
dogRouter.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));


dogRouter.get('/dogs', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../public', 'dogs.html'));
});

dogRouter.get('/puppies', (req, res, next)=>{
  res.send(`<h2>Puppies!!!</h2><form method="POST"><input type="text" name="puppies"><button type="submit">push</button></form>`);
});

dogRouter.post('/puppies', (req, res, next)=>{
  console.log('req.body', req.body.puppies)
  res.send(`<img src="http://i.imgur.com/mYXW5bF.jpg">`)
});

module.exports = dogRouter;
