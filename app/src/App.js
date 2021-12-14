// import { useState } from 'react'
// import { useEffect, useState } from 'react'
import { Link, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// import FormLogin from './components/FormLogin/index.js'
import { NoteDetail } from './components/NoteDetail.js'
import Login from './Login.js'
import Notes from './Notes'
// import noteService from './services/notes'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyle = {
  padding: 5

}

const App = () => {
  const { user } = useUser()
  const { notes } = useNotes()

  const Islogged = () => {
    return user ? <Navigate to='/' /> : <Login />
  }
  return (
    <BrowserRouter>
      <div className='container'>
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
          <Route
            path='/notes' element={<Notes />}
          />
          <Route path='/users' element={<Users />} />
          <Route
            path='/login' element={<Islogged />}
          />
          <Route path='/*' element={<h1>no disponible</h1>} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
