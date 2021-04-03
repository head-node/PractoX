import React from 'react';
import "./index.css"
function index(props) {
    return (
       <div className="searchBar"> 
          <input type="search" placeholder="Search location"></input>
          <input type="search" placeholder="Search Doctors, clinics, hospitals, etc"></input>
       </div>
    );
}

export default index;