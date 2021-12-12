import { useEffect, useState } from 'react'
import noteService from '../services/notes'
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

  return {
    user
  }
}
