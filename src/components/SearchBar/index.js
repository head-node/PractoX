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
      <img src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="ad"/>
    </div>
  );
};

export default SearchBar;
