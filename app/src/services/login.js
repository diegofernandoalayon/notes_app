import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async credential => {
  const { data } = await axios.post(baseUrl, credential)
  return data
}

export default { login }
