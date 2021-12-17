// import { useState } from "react"

// import Toggleable from '../Toggleable'
import PropTypes from 'prop-types'
// import { useState } from 'react'

export default function FormLogin ({ username, password, handleLoginSubmit, ...props }) {
  return (
  // <Toggleable buttonLabel='Show login'>
    <form onSubmit={handleLoginSubmit}>
      <input
            // type='text'
            // value={username}
            // onChange={props.handleUsernameChange}
        {...username}
        name='Username'
        placeholder='Username'
      />
      <input
            // type='password'
            // value={password}
            // onChange={props.handlePasswordChange}
        {...password}
        name='password'
        placeholder='Password'
      />

      <button id='form-login-button' onClick={handleLoginSubmit}>
        Login
      </button>
    </form>
  // </Toggleable>

  )
}

FormLogin.prototypes = {
  handleLoginSubmit: PropTypes.func.isRequired,
  username: PropTypes.string

}
