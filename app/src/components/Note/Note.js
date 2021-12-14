import { Link } from 'react-router-dom'

export default function Note ({ content, important, toggleImportance, ...props }) {
  const label = important
    ? 'make not important'
    : 'make important'
  return (
    <div>
      <Link to={`/notes/${props.id}`}>{content}</Link>
      <small><strong>{String(important)}</strong></small>
      <button onClick={toggleImportance}>{label}</button>
    </div>
  )
}
