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
            // type='text'
            // value={username}
            // onChange={props.handleUsernameChange}
            {...username}
            name='Username'
            placeholder='Username'
          />
        </div>
        <div>
          <input
            // type='password'
            // value={password}
            // onChange={props.handlePasswordChange}
            {...password}
            name='password'
            placeholder='Password'
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
