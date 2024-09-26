import React, { useRef } from "react";

function Search({ searchValue, setSearchValue }) {
  const searchRef = useRef(null);

  function handleInput(e) {
    setSearchValue(e.target.value);
  }

  function handleFocus() {
    searchRef.current.classList.add("focus");
  }

  function handleBlur() {
    if(searchValue === "") {
        searchRef.current.classList.remove("focus");
    }
  }

  return (
    <div className="search" ref={searchRef}>
      <label className="search__lbl" htmlFor="search">
        Type city
      </label>
      <input
        className="search__input"
        type="text"
        value={searchValue}
        id="search"
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
