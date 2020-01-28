import React, { useState } from 'react';
import './index.style.css';
import FlightSearchItem from './FlightSearchItem';
import FlightSearchFooter from './FlightSearchFooter';
import useFetchFlightResults from './useFetchFlightResults';
import SortBy from './filters/SortBy';
import { SortByDefaultOption } from './filters/SortBy/enums';

export default function FlightSearch() {
  const [sortBy, setSortBy] = useState(SortByDefaultOption);

  // Fetch Flights
  const { flights } = useFetchFlightResults();

  // Only show 10 flight results per page
  const paginatedFlights = flights.slice(0, 8);

  return (
    <div className="row">
      <div className="pane m-t-1">
        <div className="pane-header search-results__header">
          <div className="search-results__title">
            <b>Select an outbound flight</b>
            <p className="m-v-0 fade small">DEN → CHI</p>
          </div>
          <SortBy value={sortBy} onChange={setSortBy} />
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
