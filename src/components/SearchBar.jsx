import React from "react";
import Search from "./Search";
import Autocomplete from "./Autocomplete";

function SearchBar({ searchValue, setSearchValue, handleSearch }) {
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch} />
      <Autocomplete />
    </>
  );
}

export default SearchBar;
