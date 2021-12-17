import { Link } from 'react-router-dom'
import { Button } from '../Button'

export default function Note ({ content, important, toggleImportance, ...props }) {
  const label = important
    ? 'make not important'
    : 'make important'
  const variant = important
    ? 'secondary'
    : 'primary'
  return (
    <li>

      <Link to={`/notes/${props.id}`} style={{ textDecoration: 'none' }}>{content}</Link>
      {/* <small><strong>{String(important)}</strong></small> */}

      <Button onClick={toggleImportance} variant={variant}>{label}</Button>

    </li>
  )
}
