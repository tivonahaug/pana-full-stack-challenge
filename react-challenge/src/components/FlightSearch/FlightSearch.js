import React, { useContext } from 'react';
import FlightSearchItem from './FlightSearchItem';
import FlightSearchFooter from './FlightSearchFooter';
import useFetchFlightResults from './useFetchFlightResults';
import FilterContext from './filters/FilterContext';
import SortBy from './filters/SortBy';

export default function FlightSearch() {
  const { sortBy } = useContext(FilterContext);

  // Fetch Flights
  const { flights } = useFetchFlightResults();

  // Replace the following with the correct implementation
  // ...Or move sorting to the backend and refetch flight results when sortBy changes
  let sortedFlights = flights;
  if (sortBy.value !== 'BEST') {
    // Can you explain why we use [...flights].reverse() instead of simply calling flights.reverse()?
    sortedFlights = [...flights].reverse();
  }

  // Only show 10 flight results per page
  const paginatedFlights = sortedFlights.slice(0, 8);

  return (
    <div className="row">
      <div className="pane m-t-1">
        <div className="pane-header search-results__header">
          <div className="search-results__title">
            <b>Select an outbound flight</b>
            <p className="m-v-0 fade small">DEN → CHI</p>
          </div>
          <SortBy />
        </div>
        {/* Display Flight Results */}
        <div className="pane-content">
          {Array.isArray(paginatedFlights) &&
            paginatedFlights.map(flight => (
              <FlightSearchItem key={flight.id} flight={flight} />
            ))}
        </div>
      </div>
      {/* Pagination */}
      <FlightSearchFooter />
    </div>
  );
}
