const {Router} = require('express');
const path = require('path');

//
const {newPage, submit} = require('../controllers/animalcontrol')
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
  // res.sendFile(path.join(__dirname,  '../public',  'monkeys.html'))
  newPage(req, res);
})

animalRouter.get('/chickens', newPage);

animalRouter.post('/chickens', submit);


module.exports = animalRouter;
