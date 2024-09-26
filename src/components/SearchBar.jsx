import React from "react";
import Search from "./Search";
import Autocomplete from "./Autocomplete";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Autocomplete />
    </>
  );
}

export default SearchBar;
