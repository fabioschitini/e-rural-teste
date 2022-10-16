var express = require('express');
var router = express.Router();
const salasController=require('../controllers/Salas')

/* GET home page. */
router.get('/', (req,res,next)=>{
  res.json("Welcome to my API e-rural :)")
});

router.get('/salas', salasController.salas_get);
router.post('/salas', salasController.salas_post);
router.delete('/salas/:id', salasController.salas_delete);

module.exports = router;
