import React, { useRef } from "react";

function Search({ searchValue, setSearchValue, handleSearch }) {
  const searchRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
  }

  function handleInput(e) {
    setSearchValue(e.target.value);
  }

  function handleFocus() {
    searchRef.current.classList.add("focus");
  }

  function handleBlur() {
    if (searchValue === "") {
      searchRef.current.classList.remove("focus");
    }
  }

  return (
    <div className="search" ref={searchRef}>
      <div className="search__wrapper">
        <form onSubmit={handleSubmit}>
          <label className="search__lbl" htmlFor="search">
            Type city
          </label>
          <input
            className="search__input"
            type="text"
            value={searchValue}
            id="search"
            onChange={handleInput}
            onK
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </form>
      </div>
      <button className="search__btn" onClick={handleSearch} type="submit">
        Search
      </button>
    </div>
  );
}

export default Search;
