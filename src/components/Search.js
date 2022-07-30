import React from "react";
import { MdSearch } from "react-icons/md"

function Search() {
    return (
        <div className="search">
             <MdSearch className="search-icon" size="1.5em" />
             <input 
             type="text" 
             placeholder="Search your notes..."
             />
        </div>
    );
}

export default Search;