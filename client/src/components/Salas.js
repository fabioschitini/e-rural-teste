import { useState} from 'react'
import '../components/styles/video.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './subComponents/SearchBar';
import VideoList from './subComponents/VideoList';
import VideoDetails from './subComponents/VideoDetails';
const Salas=()=>{
    const [videos,setVideos]=useState([])
    const [selectedVideo,setSelectedVideo]=useState(null)

    return(
        <div>
      <SearchBar setVideos={setVideos}/>
<div className='video-container'>
<VideoDetails selectedVideo={selectedVideo}/>
<VideoList videos={videos} setSelectedVideo={setSelectedVideo}/>
</div>
        </div>
    )
}

export default Salas