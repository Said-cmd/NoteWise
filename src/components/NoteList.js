import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";

function NoteList({ notes, setNotes, handleAddNote, search }) {
    const filteredNotes = notes.filter((note) => {
        return note.content.toLowerCase().includes(search.toLowerCase())
    })

    const notesList = filteredNotes.map((note) => {
        return <Note
        notes={notes}
        setNotes={setNotes}
        id={note.id}
        key={note.id}
        content={note.content}
        date={note.date}
        />
    })
    
    return (
        <div className="notes-list">
            {notesList}
            <NewNote handleAddNote={handleAddNote}/>
        </div>
    );
}

export default NoteList;