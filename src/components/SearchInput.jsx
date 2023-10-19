import React from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";

function SearchInput({ value, eventHandler }) {
  return (
    <input
      type="text"
      className="form-control border-0 p-0 custom-input"
      placeholder="Search for a country"
      value={value}
      onChange={(e) => eventHandler(e)}
  
    />
  );
}

export default SearchInput;
