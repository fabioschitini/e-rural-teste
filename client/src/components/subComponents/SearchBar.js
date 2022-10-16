import { useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Alert, Button} from 'react-bootstrap';
import youtube from '../apis/youtube'
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';
  import ReactLogo from '../logos/share.svg';

const SearchBar=(props)=>{
    const [searchInput,setSearchInput]=useState('')
    const [show,setShow]=useState(false)
    const [copy,setCopy]=useState(false)
    const shareUrl = `${window.location.href}`;
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
            <Alert show={show} >
        <div className="d-flex justify-content-space-between">
            <input readonly  value={window.location.href} />
            <CopyToClipboard text={window.location.href}
          onCopy={() =>setCopy(true)}>
           <button className={`${copy ? 'copied' : 'copy' }`}>
             {copy ? 'Copied' : "Copy"}
           </button>
        </CopyToClipboard>
        <Button onClick={() => setShow(false)}   variant="outline-danger">Sair</Button>

        <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
          style={{marginLeft:'auto'}}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <LinkedinShareButton
          url={shareUrl}
          quote={'Share Link'}
          hashtag={'#portfolio...'}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <TwitterShareButton
          url={shareUrl}
          quote={'Share Link'}
          hashtag={'#portfolio...'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        </div>
      </Alert>
<form  id='yolo' style={{alignItems:'center'}} onSubmit={handleSubmit} className="d-flex" role="search">
        <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} style={{marginTop:"10px",marginLeft:'auto',maxWidth:'70%'}} className="form-control " type="search" placeholder="Procurar pelo nome do video..." aria-label="Search"/>
        <img className='share' data-testid="share" onClick={() => setShow(true)} style={{height:'1rem',cursor:'pointer'}} 
                src={ReactLogo} alt="React Logo" />
      </form>
        </div>
    )
}

export default SearchBar 