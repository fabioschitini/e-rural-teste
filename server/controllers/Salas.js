var Salas= require('../models/salas');


exports.salas_get=async(req,res,next)=>{
    try{
      const allSalas=await Salas.find()
      //console.log(allGames)
        res.json( allSalas)
       }
      catch(e){
       // console.error(e.message)
        return res.json({errorMessage:'Server Side Error!'})
      } 
}

exports.salas_post=async (req,res,next)=>{
    try{
        const name=req.body.name
        let sala=new Salas({
          name
        })
      await sala.save()
        res.json(sala)
      }
      catch(e){
        console.error(e.message)
        return res.json({errorMessage:'Server Side Error!'})
      }
}

exports.salas_delete=async(req,res,next)=>{
    try{
      await Salas.findByIdAndDelete(req.params.id)
      const salas=await Salas.find({})
       // let newArray=allGames.filter(game=>game.id!=req.params.id)
        res.json(salas)
      }
      catch(e){
        console.error(e.message)
        return res.json({errorMessage:'Server Side Error!'})
      }
}
