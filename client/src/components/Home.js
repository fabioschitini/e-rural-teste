import { useState,useEffect } from 'react';
import { LocationDisplay } from '../App';
import NomeSala from './subComponents/NomeSala';
import SalasList from './subComponents/SalasList';
import instance from './apis/express'

 
const Home=()=>{
    const [show, setShow] = useState(false);
    const [room, setRooms] = useState('');
    const [testeSalas, setTesteSalas] = useState('');

    useEffect(()=>{
        const fetchRooms=async ()=>{
           const reponse=await instance.get('/salas')
           setRooms(reponse.data)
        }
        fetchRooms()
    },[])

    return(
<div> 
<NomeSala setTesteSalas={setTesteSalas} show={show} setShow={setShow}/>
<SalasList setShow={setShow} room={room} setTesteSalas={setTesteSalas} />
    <div  style={{display:'none'}} data-testid="test">{testeSalas}</div>
<LocationDisplay/>
</div>
    )
}

export default Home