// import { useState } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './Notes'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyle = {
  padding: 5

}

const App = () => {
  return (
    <BrowserRouter>

      <header>

        <Link to='/' style={inlineStyle}>Home</Link>
        <Link to='/notes' style={inlineStyle}>Notes</Link>
        <Link to='/users' style={inlineStyle}>Users</Link>
      </header>

      <Routes>
        <Route path='/notes/:id' element={<h1>single note</h1>} />
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
        <Route path='/*' element={<h1>no disponible</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
