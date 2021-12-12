import { useEffect, useState } from 'react'
import noteService from '../services/notes.js'
import loginService from '../services/login.js'
export const useUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])
  const logout = () => {
    window.localStorage.removeItem('loggedNoteAppUser')
    setUser(null)
    noteService.setToken(user.token)
  }
  const login = ({ username, password }) => {
    return loginService.login({
      username,
      password
    }).then((user) => {
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )
      noteService.setToken(user.token)
      setUser(user) // del custom hook
    })
  }
  return {
    user,
    logout,
    login
  }
}
