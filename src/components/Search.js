import React from "react";
import { MdSearch } from "react-icons/md"

function Search() {
    return (
        <div className="search">
      <input
        type="text"
        placeholder="Search your Recent Notes"
      />
      <MdSearch className='search-icons' size='1.3em' />
    </div>
    );
}

export default Search;