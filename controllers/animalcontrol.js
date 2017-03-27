'use strict';

const { join } = require('path');

const chickData = require('../models/chicken');

const chickenNames = chickData.map((chicken)=> chicken.name);

module.exports.newPage = (req, res, err)=> {
  res.sendFile(join(__dirname, '../public', `${req.url}.html`))
}


module.exports.submit = (req, res, err) =>{
  console.log(`submitting a form for ${req.url}`);
  res.send(`no chickens found. ${chickenNames.join(' and ')}`);
}

module.exports.submitKittens = (req, res, err) =>{
  res.send(`<img src="http://i.imgur.com/0IslUc5.jpg">`);
}

module.exports.submitPuppies = (req, res, err) =>{
  console.log('req.body', req.body.puppies)
  res.send(`<img src="http://i.imgur.com/mYXW5bF.jpg">`)
}
