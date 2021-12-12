// import { useState } from "react"

import Toggleable from '../Toggleable'
import PropTypes from 'prop-types'
// import { useState } from 'react'
export default function FormLogin ({ username, password, handleLoginSubmit, ...props }) {
  return (
    <Toggleable buttonLabel='Show login'>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='password'
            placeholder='Password'
            onChange={props.handlePasswordChange}
          />
        </div>
        <button id='form-login-button'>
          Login
        </button>
      </form>
    </Toggleable>

  )
}

FormLogin.prototypes = {
  handleLoginSubmit: PropTypes.func.isRequired,
  username: PropTypes.string

}
