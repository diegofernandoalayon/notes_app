import axios from 'axios'
// const baseUrl='https://immense-cove-52767.herokuapp.com/api/notes'
const baseUrl = 'http://localhost:3001/api/notes'

let token = null
const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAllNotes = () => {
  return axios.get(baseUrl)
    .then((response) => {
      const { data } = response
      return data
    })

  // return fetch(baseUrl).then(data => data.json()).then(dataa =>dataa)

  // https://pokeapi.co/api/v2/pokemon/1/
}

const createNote = (newNote) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  return axios.post(baseUrl, newNote, config)
    .then(response => {
      const { data } = response
      return data
    })
}
const updateNote = (id, changedNote) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  return axios.put(`${baseUrl}/${id}`, changedNote, config)
    .then(response => response.data)
}

export default { getAllNotes, createNote, updateNote, setToken }
