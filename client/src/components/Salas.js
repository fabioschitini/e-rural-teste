import { useState,useEffect} from 'react'
import '../components/styles/video.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './subComponents/SearchBar';
import VideoList from './subComponents/VideoList';
import VideoDetails from './subComponents/VideoDetails';
import instance from './apis/express'
import {useParams} from 'react-router-dom'

const Salas=()=>{
    const [videos,setVideos]=useState([])
    const [nomeSala,setNomeSala]=useState(null)
    const [selectedVideoTitle,setSelectedVideoTitle]=useState(null)
    const [selectedVideoLink,setSelectedVideoLink]=useState(null)
    const [selectedVideoDescription,setSelectedVideoDescription]=useState(null)
    const [selectedVideoImage,setSelectedVideoImage]=useState(null)

    const {id}=useParams()

    const clickVideo=async (selectedVideo)=>{
       await instance.put(`salas/${id}`,{link:selectedVideo.id.videoId,title:selectedVideo.snippet.title,
        description:selectedVideo.snippet.description,name:nomeSala,image:selectedVideo.snippet.thumbnails.medium.url})
        setSelectedVideoLink(selectedVideo.id.videoId)
        setSelectedVideoDescription(selectedVideo.snippet.description)
        setSelectedVideoTitle(selectedVideo.snippet.title)
        setSelectedVideoImage(selectedVideo.snippet.thumbnails.medium.url)
        }

    useEffect( ()=>{
        const fetchSalaInfo=async()=>{
        const salaInfo=await instance.get(`salas/${id}`)
        setSelectedVideoDescription(salaInfo.data.description)
        setSelectedVideoLink(salaInfo.data.link)
        setSelectedVideoTitle(salaInfo.data.title)
        setNomeSala(salaInfo.data.name)
        console.log(salaInfo.data.name)
    }
        fetchSalaInfo()

    },[])

    return(
        <div>
      <SearchBar setVideos={setVideos}/>
<div className='video-container'>
<VideoDetails Link={selectedVideoLink} Description={selectedVideoDescription} Title={selectedVideoTitle}/>
<VideoList videos={videos}  clickVideo={clickVideo}/>
</div>
        </div>
    )
}

export default Salas