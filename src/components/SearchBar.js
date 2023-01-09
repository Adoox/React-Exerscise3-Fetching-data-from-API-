import React, { useState } from "react";

export const SearchBar = ({ onSubmitSearch }) => {
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    if (e.key === "Enter") {
      onSubmitSearch(search);
    }
  };

  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleClick(e)}
      />
    </div>
  );
};
