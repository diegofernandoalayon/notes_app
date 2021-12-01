import { useRef, useState } from 'react'
import Toggleable from '../Toggleable'

export function FormNote ({ addNote }) {
  const [newNote, setNewNote] = useState('')
  const toggleableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
    // const newNote = event.target.value
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: false
    }
    addNote(noteObject)
    setNewNote('')
    toggleableRef.current.toggleVisibility()
  }
  return (
    <Toggleable buttonLabel='New Note' ref={toggleableRef}>
      <h3>Create a new note</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={newNote}
          placeholder='Write your note content'
        />
        <button>Crear nota</button>
      </form>
    </Toggleable>
  )
}
