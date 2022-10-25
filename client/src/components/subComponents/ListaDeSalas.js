import {Link} from 'react-router-dom'
import instance from '../apis/express'


const SalasList=(props)=>{
    const DeleteSala=async(e)=>{
        try{
            props.setTesteSalas(JSON.stringify(props.room))
            console.log('ate aqui funciona')
            const result=await instance.delete(`/salas/${e.target.id}`)
            console.log('whattttttttt')
            console.log(result,'resultado de deletar a sala')
            props.setTesteSalas(JSON.stringify(result.data))
            window.location.reload();
        }
        catch(e){ 
            console.error(e.message)
        }
    }
    return(
      <ul class="cards">
        {props.room&& props.room.map(sala=>{
      return(
            <li style={{maxWidth:'20rem'}}>
    <a  class="card">
      {sala.image?
        <img src={sala.image} class="card__image" alt="" />
      :  <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
    }
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div style={{display:'flex',justifyContent:'space-between'}} class="card__header-text">
          <Link to={`/e-rural-teste/salas/${sala._id}`}>   <h3 class="card__title">{sala.name}</h3> </Link > 
            <h3 stlye={{cursor:'pointer'}} onClick={DeleteSala} id={sala._id} data-testid={sala.name}  class="card__title delete">Delete</h3>            
          </div>
        </div>
        {sala.description?
        <p  className="card__description" alt="" > {sala.description}</p>
      :          <p className="card__description">Entre e compartilhe seus videos com seus amigos!</p>
    }
      </div>
    </a>      
            </li>)})}
                </ul>
           )
}

export default SalasList