import { useState,useEffect } from 'react';
import { LocationDisplay } from '../App';
import NomeDaSala from './subComponents/NomeDaSala';
import ListaDeSalas from './subComponents/ListaDeSalas';
import instance from './apis/express'
import '../components/styles/homePage.css';

 
const Home=()=>{
    const [show, setShow] = useState(false);
    const [room, setRooms] = useState(undefined);
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
    <div>
        <h1 data-testid="add" onClick={() => setShow(true)} className='criar-sala'>Criar Sala</h1>
    </div>
<NomeDaSala setTesteSalas={setTesteSalas} show={show} setShow={setShow}/>
<ListaDeSalas setShow={setShow} room={room} setTesteSalas={setTesteSalas} />
    <div  style={{display:'none'}} data-testid="test">{testeSalas}</div>
<LocationDisplay/>
</div>
    )
}

export default Home