const {Router} = require('express');
const path = require('path');

const animalRouter = Router();

//applying middleware to all routes in this router
// animalRouter.use((req, res, next)=>{
//   if(req.user === 'farmer') {
//     next();
//   } else {
//     res.status(403).send('forbidden');
//   }
// })

animalRouter.get('/monkeys', (req, res, next)=>{
  console.log("Fetching some Monkeys");
  console.log("this ran at ${req.requestedTime}")
  res.sendFile(path.join(__dirname,  '../public',  'monkeys.html'))
})

animalRouter.get('/chickens', (req, res, next)=>{
  console.log('looking for chickens')
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`);
})

animalRouter.post('/chickens', (req, res, next)=>{
  console.log("Posting a form for chickens");
  res.send('nothing here but us chickens');
})


module.exports = animalRouter;
