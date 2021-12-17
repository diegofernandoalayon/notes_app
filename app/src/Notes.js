import React, { useState } from 'react'
import Notification from './components/Notification'
import { FormNote } from './components/FormNote'

import Note from './components/Note/Note'
// import noteService from './services/notes'
// import loginService from './services/login'

// import './estilos.css'
import './index.css'
// import FormLogin from './components/FormLogin'
import { useNotes } from './hooks/useNotes'
import { useUser } from './hooks/useUser'
import Login from './Login'
// import Toggleable from './components/Toggleable'
// import { Table } from 'react-bootstrap'

const Notes = () => {
  const { notes, addNote, toggleImportanceOf } = useNotes()
  const { user, logout } = useUser()
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const handleLoginSubmit = (event) => {
  //   event.preventDefault()
  //   login({ username, password }) // del hook useUser
  //     .then(() => {
  //       setUsername('')
  //       setPassword('')
  //     }).catch(() => {
  //       setError('Wrong credentials')
  //       setUsername('')
  //       setPassword('')
  //       setTimeout(() => {
  //         setError(null)
  //       }, 5000)
  //     })
  // }

  const toggleImportanceOfNote = (id) => {
    toggleImportanceOf(id)
      .catch(() => {
        setError('Note was already removed from server')
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
          ? <button onClick={logout}>Logout</button>
          : null
      }
      {
        user
          ? <FormNote addNote={addNotee} />
          : <Login />
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
