import axios from 'axios';

const KEY = 'AIzaSyAFL9HZSzsPUp3sCPdwolLEpTXwUn9J2_w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});