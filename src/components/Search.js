import React from "react";
import { MdSearch } from "react-icons/md"

function Search({ setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value)
  }

    return (
        <div className="search">
             <MdSearch className="search-icon" size="1.5em" />
             <input 
             type="text" 
             placeholder="Search your notes..."
             onChange={handleSearch}
             />
        </div>
    );
}

export default Search;