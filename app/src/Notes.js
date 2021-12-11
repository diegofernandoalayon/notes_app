import React, { useEffect, useState } from 'react'
import Notification from './components/Notification'
import { FormNote } from './components/FormNote'

import Note from './components/Note/Note'
import noteService from './services/notes'
import loginService from './services/login'

// import './estilos.css'
import './index.css'
import FormLogin from './components/FormLogin'
// import Toggleable from './components/Toggleable'

const App = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    setLoading(true)

    noteService
      .getAllNotes().then((data) => {
      // console.log(data)
        setNotes(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = (noteObject) => {
    // const {token} = user
    noteService
      .createNote(noteObject)
      .then((data) => {
        setNotes(prevNotes => prevNotes.concat(data))
        // setNewNote('')
      }).catch(error => {
        console.error(error)
        setError('La API fallo')
      })
  }
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .updateNote(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
    // console.log(changedNote)
  }
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

  return (
    <div>
      <h1>Notes</h1>
      {loading ? 'cargando...' : ''}
      {/* {error ? error:''} */}
      <Notification message={error} />
      {
        user
          ? <button onClick={handleLogout}>Logout</button>
          : null
      }
      {
        user
          ? <FormNote addNote={addNote} />
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
          <Note key={note.id} toggleImportance={() => toggleImportanceOf(note.id)} {...note} />
        ))}
      </ol>

    </div>
  )
}

export default App
