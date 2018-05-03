import axios from 'axios'

// This file contains all backend apis...
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081'
  })
}
