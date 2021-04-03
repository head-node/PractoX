import React from "react";
import discount from '../../assets/images/discount.webp';
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
      <img src={discount}alt="ad"/>
    </div>
  );
};

export default SearchBar;
