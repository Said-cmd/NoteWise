import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function NewNote({ handleAddNote }) {
    const [noteContent, setNoteContent] = useState('');
    const noteCharachterLimit = 250;

    function handleChange(e) {
        if(noteCharachterLimit - e.target.value.length >= 0) {
        setNoteContent(e.target.value);
        }
    };

    function handleAddClick() {
        if(noteContent.trim().length > 0){
            handleAddNote(noteContent);
            setNoteContent('')
        } 
    }

    return (
        <div className="note new">
            <textarea 
            rows="8"
            cols="10"
            placeholder="Add a new note..."
            value={noteContent}
            onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{noteCharachterLimit - noteContent.length} Characters Remaining</small>
                <IoIosAddCircle
                className="add"
                onClick={handleAddClick}
                size="1.5em"
                />
            </div>
        </div>
    );
}

export default NewNote;