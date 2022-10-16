import axios from 'axios'
const KEY='AIzaSyDiYzGX1KBCUIP7OGn2EIf3McRaJ1S4EGQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})

