import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Note ({ content, important, toggleImportance, ...props }) {
  const label = important
    ? 'make not important'
    : 'make important'
  const variant = important
    ? 'secondary'
    : 'primary'
  return (
    <>
      <td width='50%'>
        <Link to={`/notes/${props.id}`} style={{ textDecoration: 'none' }}>{content}</Link>
        {/* <small><strong>{String(important)}</strong></small> */}
      </td>
      <td>
        <Button onClick={toggleImportance} variant={variant}>{label}</Button>
      </td>
    </>
  )
}
