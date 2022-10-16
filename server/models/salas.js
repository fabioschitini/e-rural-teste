const mongoose=require(`mongoose`)
const Schema=mongoose.Schema

const SalasSchema=new Schema({
    name:{type:String,required:true}
  }
)

module.exports=mongoose.model(`Salas`,SalasSchema);