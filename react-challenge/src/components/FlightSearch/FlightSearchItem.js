import React from 'react';
import PropTypes from 'prop-types';
import { FlightSearchResultPropType } from 'proptypes/flightSearch';

function FlightSearchItem({ flight }) {
  return <div>hey</div>;
}

FlightSearchItem.propTypes = {
  flight: FlightSearchResultPropType,
};

export default FlightSearchItem;
