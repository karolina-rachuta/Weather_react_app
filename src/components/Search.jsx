import React, { useRef } from "react";

function Search({ searchValue, setSearchValue }) {
  const searchRef = useRef(null);

  function handleInput(e) {
    setSearchValue(e.target.value);
  }

  function handleFocus(e) {
    searchRef.current.classList.add("focus");
  }

  return (
    <div className="search" ref={searchRef} onFocus={handleFocus}>
      <label className="search__lbl" htmlFor="search">
        Type city
      </label>
      <input
        className="search__input"
        type="text"
        value={searchValue}
        id="search"
        onChange={handleInput}
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
