'use strict'

require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//routes
// const animalRouter = require(`./routes/animals`);
// const gameRouter = require(`./routes/games`);
const routes = require(`./routes/`);


const requestTime = (req, res, next) =>{
  req.requestedTime = Date.now;
  next();
 }




//const printTime = (req, res, next)=>{
//   console.log(req.requestedTime);
//   next();
// }

app.use(requestTime);

// app.use(animalRouter);
// app.use(gameRouter);

app.use(routes);

app.use(express.static(__dirname + '/public'));



app.use((req, res)=>{
  res.send(`where do you think you're going? We only have monkeys and chickens here!`);
})


app.listen(port, ()=>{
  console.log(`server listening on port ${port}`)
})
