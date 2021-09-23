import React from 'react';
import './SearchBar.css'

function SearchBar  ({input:keyword,onChange:setKeyword})  {
  const BarStyling = {width:"25rem",background:"#F2F1F9", border:"none", padding:"0.9rem", borderRadius:"10px"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Address"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
