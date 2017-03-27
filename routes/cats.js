const {Router} = require('express');
const path = require('path');
const catRouter = Router();

catRouter.get('/cats', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../public', 'cats.html'));
});

catRouter.get('/kittens', (req, res, next)=>{
  res.send(`<h3>click below for kittens</h3><form method="POST"><input type="text"><button type="submit">Push</button></form>`)
});

catRouter.post('/kittens', (req, res, next)=>{
  res.send(`<img src="http://i.imgur.com/0IslUc5.jpg">`);
});

module.exports = catRouter;
