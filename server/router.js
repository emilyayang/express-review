// Router here
const router = require('express').Router();
const controller = require('./controller')

router  
  .route('/') //endpoint if changed reqs go to apu then need to go to what ever endpoint
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

router  
  .route('/:indexxx') //because using params in List.jsx can call anything 
  .delete(controller.delete)

module.exports = router;