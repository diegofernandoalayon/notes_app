
import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'

const Toggleable = forwardRef(({ children, buttonLabel }, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }
  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
  return (
    <div>
      <div style={hideWhenVisible}>
        <button className='todo' onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  )
})
Toggleable.displayName = 'Toggleable' // para forzar el nombre del componente ya que este al encontrase envuelto en forwardRef no es muy instructivo, esto para el proptypes
Toggleable.propTypes = {
  buttonLabel: PropTypes.string.isRequired // se indica que el buttonLabel es una prop requerida de tipo string
}
export default Toggleable
