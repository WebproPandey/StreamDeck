import axios from 'axios';

const request  = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
})

export  default  request ;

