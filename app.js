'use strict'

const express = require('express');

const app = express();





const requestTime = (req, res, next) =>{
  req.requestedTime = Date.now;
  next();
 }

//const printTime = (req, res, next)=>{
//   console.log(req.requestedTime);
//   next();
// }

app.use(requestTime);

app.use(express.static(__dirname + '/public'));

app.get('/monkeys', (req, res, next)=>{
  console.log("Fetching some Monkeys");
  console.log("this ran at ${req.requestedTime}")
  res.sendFile(__dirname + '/public/monkeys.html')
})

app.get('/chickens', (req, res, next)=>{
  console.log('looking for chickens')
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`);
})

app.post('/chickens', (req, res, next)=>{
  console.log("Posting a form for chickens");
})

app.use((req, res)=>{
  res.send(`where do you think you're going? We only have monkeys and chickens here!`);
})


app.listen(3000, ()=>{
  console.log('server listening on port 3000')
})
