'use strict'

const { join } = require('path');

module.exports.newGame = (req, res, err) =>{
  res.sendFile(join(__dirname, '../public', `${req.url}.html`));
}

module.exports.submit = (req, res, err) =>{
  console.log("submitting a post request!");
  res.send("nothing here but us games");
}
