const mongoose=require(`mongoose`)
const Schema=mongoose.Schema

const SalasSchema=new Schema({
    name:{type:String,required:true},
    description:{type:String,required:false},
    link:{type:String,required:false},
    title:{type:String,required:false},
    image:{type:String,required:false}
  }
)
 
module.exports=mongoose.model(`Salas`,SalasSchema);