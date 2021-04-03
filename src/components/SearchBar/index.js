import React from "react";
import "./index.css";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
       className="input"
        type="search"
        placeholder="Search location"
      ></input> 
      
      <input
       className="input"
        type="search"
        placeholder="Search Doctors, clinics, hospitals, etc"
      ></input>
    </div>
  );
};

export default SearchBar;
