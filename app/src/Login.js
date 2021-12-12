import { useState } from 'react'
import FormLogin from './components/FormLogin'
import loginService from './services/login'
import noteService from './services/notes'
import Notification from './components/Notification'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  console.log(user)
  console.log(errorMessage)
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmit = (event) => {
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
      setErrorMessage('Wrong credentials')
      setUsername('')
      setPassword('')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }
  if (user) return <h2>user logged</h2>

  return (
    <div>
      <Notification message={errorMessage} />

      {/* {if(user) return null} */}
      <FormLogin
        username={username}
        password={password}
        handleLoginSubmit={handleSubmit}
        handlePasswordChange={handlePasswordChange}
        handleUsernameChange={handleUsernameChange}
      />
    </div>
  )
}
