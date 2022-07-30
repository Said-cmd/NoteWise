import React, { useEffect, useState } from "react";
import NoteList from "./NoteList";
import Search from "./Search";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light";
  const [search, setSearch] = useState('');
  
  function handleDarkMode() {
	setIsDarkMode((isDarkMode) => !isDarkMode);
  }
 
  useEffect(() => {
    fetch("http://localhost:5001/notes")
      .then((r) => r.json())
      .then((notes) => setNotes(notes))
  },[])

  function addNote(content) {
    const date = new Date()
    const newNote = {
      content: content,
      date: date.toLocaleDateString()
    }
    fetch("http://localhost:5001/notes", {
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
	<div className={appClass}>
      <div className="container">
		<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} handleDarkMode={handleDarkMode} />
        <Search setSearch={setSearch} />
        <NoteList notes={notes} setNotes={setNotes} handleAddNote={addNote} search={search} />
      </div>
	  </div>
  );
}

export default App;
