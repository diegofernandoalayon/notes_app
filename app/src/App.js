// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
// import FormLogin from './components/FormLogin/index.js'
import { NoteDetail } from './components/NoteDetail.js'
import Login from './Login.js'
import Notes from './Notes'
import noteService from './services/notes'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyle = {
  padding: 5

}

const App = () => {
  const [notes, setNotes] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    // setLoading(true)

    noteService
      .getAllNotes().then((data) => {
      // console.log(data)
        setNotes(data)
        // setLoading(false)
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
  console.log(user)
  return (
    <BrowserRouter>

      <header>

        <Link to='/' style={inlineStyle}>Home</Link>
        <Link to='/notes' style={inlineStyle}>Notes</Link>
        <Link to='/users' style={inlineStyle}>Users</Link>

        {
          user
            ? <em>Logged as {user.name}</em>
            : (
              <Link to='/login' style={inlineStyle}>
                Login
              </Link>
              )
        }
      </header>

      <Routes>
        <Route path='/notes/:noteId' element={<NoteDetail notes={notes} />} />
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<h1>no disponible</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
