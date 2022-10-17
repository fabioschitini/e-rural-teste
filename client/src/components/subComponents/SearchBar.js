import { useState} from 'react'
import youtube from '../apis/youtube'
import ReactLogo from '../logos/share.svg';
import CompartilharLink from './CompartilharLink';

const SearchBar=(props)=>{
    const [searchInput,setSearchInput]=useState('')
    const [show,setShow]=useState(false)
    const [copy,setCopy]=useState(false)
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const response = await youtube.get('/search', {
            params: { 
                q: searchInput
            }
        })
        props.setVideos(response.data.items)
    }
    return(
        <div>
 <CompartilharLink show={show} setShow={setShow} copy={copy} setCopy={setCopy}/>
<form  id='yolo' style={{alignItems:'center'}} onSubmit={handleSubmit} className="d-flex" role="search">
        <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} style={{marginTop:"10px",marginLeft:'auto',maxWidth:'70%'}} className="form-control " type="search" placeholder="Procurar pelo nome do video..." aria-label="Search"/>
        <img className='share' data-testid="share" onClick={() => setShow(true)} style={{height:'1rem',cursor:'pointer'}} 
                src={ReactLogo} alt="React Logo" />
      </form>
        </div>
    )
}

export default SearchBar 