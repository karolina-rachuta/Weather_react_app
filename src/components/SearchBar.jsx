import React from "react";
import Search from "./Search";

function SearchBar({ searchValue, setSearchValue, handleSearch }) {
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch} />
    </>
  );
}

export default SearchBar;
