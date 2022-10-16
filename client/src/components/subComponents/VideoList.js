


const VideoList=(props)=>{

    return(
<div className='video-list'>
{props.videos.map(video=>{
        return(
            <div  role='list' onClick={ () => props.setSelectedVideo(video)} className=' video-item item'>
            <img data-testid="list"  className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div style={{fontSize:'0.7rem'}} className='header '>{video.snippet.title}</div>
            </div>
        )
      })}
</div>
    )
}

export default VideoList