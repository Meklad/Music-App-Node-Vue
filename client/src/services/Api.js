import axios from 'axios'

// This file contains all backend apis...
export default () => {
  return axios.create({
    baseUrl: `http://localhost:8081`
  })
}
