
export default function Note ({ content, important, toggleImportance, ...props }) {
  const label = important
    ? 'make not important'
    : 'make important'
  return (
    <li>
      <p><strong>{content}</strong></p>
      <small><strong>{String(important)}</strong></small>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
