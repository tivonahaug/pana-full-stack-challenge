import React from 'react';
import PropTypes from 'prop-types';
import { FlightSearchResultPropType } from 'proptypes/flightSearch';
import FlightSearchItem from './FlightSearchItem';

function FlightSearchList({ flights = [] }) {
  if (!Array.isArray(flights)) return null;

  return (
    <div className="pane-content">
      {flights.map(flight => (
        <FlightSearchItem key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

FlightSearchList.propTypes = {
  flights: PropTypes.arrayOf(FlightSearchResultPropType).isRequired,
};

export default FlightSearchList;
