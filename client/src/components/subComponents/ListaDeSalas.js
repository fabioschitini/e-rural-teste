import ReactLogo from '../logos/add.svg';
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
<div className="album py-5 bg-light">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <img data-testid="add" onClick={() => props.setShow(true)} style={{height:'6rem',cursor:'pointer'}} 
                    src={ReactLogo} alt="React Logo" />
      </div>
        {props.room&& props.room.map(sala=>{
      return(
        <div key={sala._id} className="col">
          <div className="card shadow-sm">
            <div style={{padding:"20px"}} className="card-body">
                <Link to={`/e-rural-teste/salas/${sala._id}`}>  <p  className="card-text">Sala {sala.name}</p> </Link> 
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                <Link />
                    <button id={sala._id} data-testid={sala.name} onClick={DeleteSala} type="button" className="btn btn-sm btn-outline-secondary">Deletar</button>
                  </div>
              </div> 
            </div>
          </div>
        </div>
                )
                })}
    </div>
  </div>
</div>
           )
}

export default SalasList