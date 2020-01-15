import React from 'react';
import './index.style.css';
import useFetchFlightResults from './useFetchFlightResults';
import FlightSearchList from './FlightSearchList';
import FlightSearchPagination from './FlightSearchPagination';

export default function FlightSearch() {
  const { error, flights } = useFetchFlightResults();
  const paginatedFlights = flights.slice(0, 10);

  return (
    <>
      <div className="row">
        <div className="pane m-t-1">
          <div className="pane-header search-results__header">
            <div className="search-results__title">
              <b>Select an outbound flight</b>
              <p className="m-v-0 fade small">DEN -> CHI</p>
            </div>
          </div>
          <FlightSearchList flights={paginatedFlights} />
        </div>
        <FlightSearchPagination />
      </div>
    </>
  );
}
