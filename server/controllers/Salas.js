var Salas= require('../models/salas')


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

exports.salas_get_id=async(req,res,next)=>{
  try{
    const id=req.params.id
    const salasSelecionada=await Salas.findById(id)
      res.json( salasSelecionada)
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
          name, 
        })
      await sala.save() 
        res.json(sala)
      }
      catch(e){
        console.error(e.message)
        return res.json({errorMessage:'Server Side Error!'})
      }
}

exports.salas_put_id=async(req,res,next)=>{
  try{
    console.log('iniciando o put ')
    const id=req.params.id
    console.log(req.body)
    console.log(id,'a porra do idddd')
    let uptadedSala=new Salas({
      name:req.body.name,
      title:req.body.title,
      description:req.body.description,
      link:req.body.link,
      _id:req.params.id
    })
   const salasSelecionada=await Salas.findByIdAndUpdate(id,uptadedSala,{})
   const allSalas=await Salas.find()
      res.json(allSalas)
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
