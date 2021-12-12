import React, { useEffect, useState } from 'react'
import Notification from './components/Notification'
import { FormNote } from './components/FormNote'

import Note from './components/Note/Note'
import noteService from './services/notes'
import loginService from './services/login'

// import './estilos.css'
import './index.css'
import FormLogin from './components/FormLogin'
import { useNotes } from './hooks/useNotes'
// import Toggleable from './components/Toggleable'

const Notes = () => {
  const { notes, addNote, toggleImportanceOf } = useNotes()
  // const [notes, setNotes] = useState([])
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   setLoading(true)

  //   noteService
  //     .getAllNotes().then((data) => {
  //     // console.log(data)
  //       setNotes(data)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    loginService.login({
      username,
      password
    }).then((user) => {
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }).catch(() => {
      setError('Wrong credentials')
      setUsername('')
      setPassword('')
      setTimeout(() => {
        setError(null)
      }, 5000)
    })
  }
  const handleLogout = () => {
    window.localStorage.removeItem('loggedNoteAppUser')
    setUser(null)
    noteService.setToken(user.token)
  }
  const toggleImportanceOfNote = (id) => {
    toggleImportanceOf(id)
      .catch(() => {
        setError('Note \'a\' was already removed from server')
      })
  }
  const addNotee = (noteObject) => {
    addNote(noteObject)
      .catch(error => {
        console.error(error)
        setError('La API fallo')
      })
  }

  return (
    <div>
      <h1>Notes</h1>

      <Notification message={error} />
      {
        user
          ? <button onClick={handleLogout}>Logout</button>
          : null
      }
      {
        user
          ? <FormNote addNote={addNotee} />
          : <FormLogin
              username={username}
              password={password}
              handleLoginSubmit={handleLoginSubmit}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
            />
      }

      <ol>
        {notes.map(note => (
          <Note key={note.id} toggleImportance={() => toggleImportanceOfNote(note.id)} {...note} />
        ))}
      </ol>

    </div>
  )
}

export default Notes
