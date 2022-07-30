import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((r) => r.json())
      .then((notes) => setNotes(notes))
  },[])

  function addNote(content) {
    const date = new Date()
    const newNote = {
      content: content,
      date: date.toLocaleDateString()
    }
    fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote)
    })
    .then((r) => r.json())
    .then((newNote) => {
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
  })

}
  return (
      <div className="container">
        <Search />
        <NotesList notes={notes} setNotes={setNotes} handleAddNote={addNote} />
      </div>
  );
}

export default App;
