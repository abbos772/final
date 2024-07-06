import React from "react";

const Search = ({ filterData }) => {
  return (
    <div className="search-results">
      {filterData && filterData.length > 0 ? (
        filterData.map((product) => (
          <div key={product.id} className="search-result-item">
            <p>{product.title}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Search;
