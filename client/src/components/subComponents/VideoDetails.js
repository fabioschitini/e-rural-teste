import Accordion from 'react-bootstrap/Accordion';

const VideoDetails=(props)=>{
    return(    
    <div className='video-details'>
    {!props.selectedVideo&& 
    <div>
    <h1>Digite a palavra chave do video que quer buscar</h1>
    <br></br>
    <p style={{fontSize:'1rem'}}>
   Use a searchbar acima para buscar videos do YouTube baseado em plavaras chaves.Apos voce buscar a palavra, uma lista de videos
   relacionados com a palavra vai aparecer na tela.Clique em qualquer um e comece a assitir! Voce tambem pode compartilhar o link 
   da sua sala com seus amigos atraves do butao de compartilhar ao lado da barra de busca e assitir junto com eles!

    </p>
 </div>}
 {props.selectedVideo&&
     <div className='details'>
       <iframe role='iframe' src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} allowFullScreen title="Video player" />
     <div className="ui segment">
       <p className=" header">{props.selectedVideo.snippet.title}</p>
       <Accordion >
<Accordion.Item eventKey="0">
<Accordion.Header>Description</Accordion.Header>
<Accordion.Body style={{fontSize:'0.9rem'}}>{props.selectedVideo.snippet.description}</Accordion.Body>
</Accordion.Item>
</Accordion>
     </div>
   </div>}
   </div>   
   )
}

export default VideoDetails