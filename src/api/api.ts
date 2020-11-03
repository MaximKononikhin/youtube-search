import Axios from "axios"

const API_KEY = 'AIzaSyCAUeIGj1hvPzMMHSNlfRQBcsOBb4U3CUM'

const api = Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: API_KEY
  }
});

export default api;