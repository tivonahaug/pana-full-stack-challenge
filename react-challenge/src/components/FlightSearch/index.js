import React, { useContext } from 'react';
import './index.style.css';
import useFetchFlightResults from './useFetchFlightResults';
import FilterContext from './filters/FilterContext';
import FlightSearch from './FlightSearch';
import useFlightSearchFilters from './filters/useFlightSearchFilters';

export default function FlightSearchIndex() {
  // All of flight search is wrapped in the FilterContext provider
  // which holds onto the state of the filters and sorting.
  const flightSearchFilters = useFlightSearchFilters();
  return (
    <FilterContext.Provider value={flightSearchFilters}>
      <FlightSearch />
    </FilterContext.Provider>
  );
}
