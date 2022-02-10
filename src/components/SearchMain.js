import React, { useState } from "react";
import "../components/style.css";

function SearchMain() {
  const [serachTerm, seSearchTerm] = useState("tehran");
  console.log(serachTerm);

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="search"
          placeholder="Search City... "
          id="search"
          value={serachTerm}
          onChange={(e) => seSearchTerm(e.target.value)}
        />
      </div>
      <button className="searchButton">Search</button>
    </div>
  );
}

export default SearchMain;

// 562a97288069061860b1c44b209f65d3 code
// dbff20676c8bb0c8ab7ac4abb57b0d68
