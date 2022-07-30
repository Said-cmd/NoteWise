import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NoteList({ notes, setNotes, handleAddNote }) {
    const notesList = notes.map((note) => {
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
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}

export default NoteList;