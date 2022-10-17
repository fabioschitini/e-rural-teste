import { useState,useEffect } from 'react';
import { LocationDisplay } from '../App';
import NodeDaSala from './subComponents/NomeDaSala';
import ListaDeSalas from './subComponents/ListaDeSalas';
import instance from './apis/express'

 
const Home=()=>{
    const [show, setShow] = useState(false);
    const [room, setRooms] = useState('');
    const [testeSalas, setTesteSalas] = useState('');

    useEffect(()=>{
        //fetch nas salas
        const fetchRooms=async ()=>{
           const reponse=await instance.get('/salas')
           setRooms(reponse.data)
        }
        fetchRooms()
    },[])

    return(
<div> 
<NodeDaSala setTesteSalas={setTesteSalas} show={show} setShow={setShow}/>
<ListaDeSalas setShow={setShow} room={room} setTesteSalas={setTesteSalas} />
    <div  style={{display:'none'}} data-testid="test">{testeSalas}</div>
<LocationDisplay/>
</div>
    )
}

export default Home