import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import {Button,Alert} from 'react-bootstrap';
import instance from '../apis/express'

const NomeSala=(props)=>{
    const [sala, setSala] = useState('');
    const navigate=useNavigate()

    const Submit=async ()=>{
        try{
            const result=await instance.post('/salas',{name:sala})
            console.log(result,'result here mate')
            props.setTesteSalas(JSON.stringify(result.data))
            navigate(`/salas/${result.data._id}`)
        }
        catch(e){
            console.error(e.message)
        }
    }
    return(
    <Alert show={props.show} >
        <Alert.Heading>De um nome a sua sala</Alert.Heading>
        <div className="d-flex justify-content-space-between">
            <input placeholder='Insira o nome da sala' value={sala} onChange={(e)=>setSala(e.target.value)}/>
        <Button onClick={Submit}  variant="outline-success">Submit</Button>
          <Button  onClick={() => props.setShow(false)} variant="outline-danger">Sair</Button>
        </div>
      </Alert>
      )
}

export default NomeSala