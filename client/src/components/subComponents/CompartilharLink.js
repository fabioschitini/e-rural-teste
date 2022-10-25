import {
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';
  import {CopyToClipboard} from 'react-copy-to-clipboard';
  import {Alert, Button} from 'react-bootstrap';

const CompartilharLink=(props)=>{
    const shareUrl = `${window.location.href}`;
    return(
        <Alert show={props.show} >
        <div className="d-flex justify-content-space-between">
            <input readonly  value={window.location.href} />
            <CopyToClipboard text={window.location.href}
          onCopy={() =>props.setCopy(true)}>
           <button className={`${props.copy ? 'copied' : 'copy' }`}>
             {props.copy ? 'Copied' : "Copy"}
           </button>
        </CopyToClipboard>
        <Button onClick={() => props.setShow(false)}   variant="outline-danger">Sair</Button>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
          style={{marginLeft:'auto'}}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={'Share Link'}
          hashtag={'#portfolio...'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        </div>

        </Alert>

    )
}

export default CompartilharLink