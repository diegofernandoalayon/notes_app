import { Link } from 'react-router-dom'

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

      <button onClick={toggleImportance} variant={variant}>{label}</button>

    </li>
  )
}
