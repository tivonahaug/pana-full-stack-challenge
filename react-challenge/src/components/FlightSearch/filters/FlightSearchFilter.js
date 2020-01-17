import React from 'react';

export default function FlightSearchFilter({ children }) {
  return (
    <div className="search-results__filter-item--wrapper">
      <div className="search-results__filter-item">{children}</div>
    </div>
  );
}
