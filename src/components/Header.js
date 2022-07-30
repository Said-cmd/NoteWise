import React from "react";
import { BsToggleOff } from "react-icons/bs"
import { BsToggleOn } from "react-icons/bs";

function Header({ handleDarkMode, isDarkMode }) { 
    return (
        <div className="header">
            <h1>NoteWise</h1>
            {isDarkMode ? <BsToggleOn onClick={handleDarkMode} className="toggle-icon" size="3rem"/> : <BsToggleOff onClick={handleDarkMode} className="toggle-icon" size="3rem"/>}
        </div>
    );
}

export default Header;