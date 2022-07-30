import React from "react";
import { MdDeleteForever } from "react-icons/md"

function Note({content, date, notes, setNotes, id }) {

    function handleDeleteNote() {
        fetch(`http://localhost:5001/notes/${id}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then(() => {
                const currentNotes = notes.filter((note) => {
                    return note.id !== id
                })
                setNotes(currentNotes)
            })
    }

    return (
        <div className="note">
        <span>{ content }</span>
        <div className="note-footer">
            <small>{ date }</small>
            <MdDeleteForever onClick={handleDeleteNote} className="delete-icon" size="1.5em" />
        </div>
        </div>
    );
}

export default Note;