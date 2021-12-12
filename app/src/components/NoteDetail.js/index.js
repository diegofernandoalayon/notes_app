
import { useParams } from 'react-router'
// import notes from '../../services/notes'

export const NoteDetail = ({ notes }) => {
  console.log(notes)
  const { noteId } = useParams()
  console.log(noteId)
  const note = notes.find(note => note.id === noteId)
  if (!note) return null
  console.log(note)
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note?.user?.name}</div>
      <div>
        <strong>
          {note.important ? 'important' : 'not important'}
        </strong>
      </div>
    </div>
  )
}
