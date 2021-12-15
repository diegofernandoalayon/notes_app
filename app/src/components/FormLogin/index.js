// import { useState } from "react"

// import Toggleable from '../Toggleable'
import PropTypes from 'prop-types'
// import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function FormLogin ({ username, password, handleLoginSubmit, ...props }) {
  return (
  // <Toggleable buttonLabel='Show login'>
    <Form onSubmit={handleLoginSubmit}>
      <Form.Group>
        <Form.Control
            // type='text'
            // value={username}
            // onChange={props.handleUsernameChange}
          {...username}
          name='Username'
          placeholder='Username'
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            // type='password'
            // value={password}
            // onChange={props.handlePasswordChange}
          {...password}
          name='password'
          placeholder='Password'
        />
      </Form.Group>
      <Button id='form-login-button' onClick={handleLoginSubmit}>
        Login
      </Button>
    </Form>
  // </Toggleable>

  )
}

FormLogin.prototypes = {
  handleLoginSubmit: PropTypes.func.isRequired,
  username: PropTypes.string

}
