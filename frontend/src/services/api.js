import axios from 'axios'
// process.env.REACT_APP_BASEURL
const api = axios.create({
  baseURL: 'http://localhost:3333/'
})

export default api