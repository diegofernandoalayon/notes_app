import { useEffect, useState } from 'react'
import noteService from '../services/notes'
export const useNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService
      .getAllNotes().then((data) => {
      // console.log(data)
        setNotes(data)
        // setLoading(false)
      })
  }, [])
  const addNote = (noteObject) => {
    // const {token} = user
    return noteService
      .createNote(noteObject)
      .then((data) => {
        setNotes(prevNotes => prevNotes.concat(data))
        // setNewNote('')
      })
  }
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    return noteService
      .updateNote(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
    // console.log(changedNote)
  }
  return {
    notes,
    addNote,
    setNotes,
    toggleImportanceOf
  }
}
