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
  return notes
}
