import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div>
      <div className="search_bar_wrap">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search 9jaHive.."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
