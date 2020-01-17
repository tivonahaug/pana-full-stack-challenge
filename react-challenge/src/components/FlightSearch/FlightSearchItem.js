import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FlightSearchResultPropType } from 'proptypes/flightSearch';
import FlightSearchText from './FlightSearchText';

export const getFlightNumbers = flights => {
  return flights
    .map(flight => {
      return `${flight.marketingAirlineCode} ${flight.marketingFlightNumber}`;
    })
    .join(', ');
};

export const getFlightDays = (startDateMoment, endDateMoment) => {
  const format = 'ddd M/D';
  return endDateMoment.isSame(startDateMoment, 'day')
    ? endDateMoment.format(format)
    : `${endDateMoment.format(format)} - ${startDateMoment.format(format)}`;
};

function FlightSearchItem({ flight }) {
  const { segmentsArray, class: flightClass, price: totalPrice } = flight;
  // All flights have a segmentsArray with a single index
  const [firstSegment] = segmentsArray;

  const {
    flights,
    airlineUrl,
    endDate,
    startDate,
    departsAt,
    arrivesAt,
    to: toAirport,
    from: fromAirport,
    travelTime,
  } = firstSegment;

  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);

  const flightNumbers = getFlightNumbers(flights);
  const flightDays = getFlightDays(startDateMoment, endDateMoment);
  const seatsRemaining = flights[0].seatsRemaining;
  const roundedPrice = Math.round(totalPrice);

  // Get Travel Times (h,m) display
  const travelDuration = moment.duration(travelTime, 'minutes');
  const travelTimeHours = travelDuration.hours();
  const travelTimeMinutes = travelDuration.minutes();

  // Departure and Arrival Times
  const timeFormat = 'h:mma';
  const departureTime = moment(departsAt).format(timeFormat);
  const arrivalTime = moment(arrivesAt).format(timeFormat);

  // Stops Count
  const stopsString =
    Array.isArray(flights) && flights.length === 1
      ? 'Nonstop'
      : flights.length === 2
      ? `${flights.length - 1} Stop`
      : `${flights.length - 1} Stops`;

  return (
    <div className="search-result">
      <div className="search-results--section search-results--section--large">
        <img src={airlineUrl} alt="" />
        <div className="search-result--content m-l-1">
          <FlightSearchText>
            {departureTime} - {arrivalTime}
          </FlightSearchText>
          <FlightSearchText size="sm">{flightNumbers}</FlightSearchText>
        </div>
      </div>
      <div className="search-results--section">
        <div className="search-result--content m-l-1">
          <FlightSearchText>
            {travelTimeHours}h {travelTimeMinutes}m
          </FlightSearchText>
          <FlightSearchText size="sm">{flightDays}</FlightSearchText>
        </div>
      </div>
      <div className="search-results--section">
        <div className="search-result--content m-l-1">
          <FlightSearchText>{stopsString}</FlightSearchText>
          <FlightSearchText size="sm">
            {fromAirport} → {toAirport}
          </FlightSearchText>
        </div>
      </div>
      <div className="search-results--section">
        <div className="search-result--content m-l-1">
          <FlightSearchText>{flightClass}</FlightSearchText>
          <FlightSearchText size="sm">{seatsRemaining} left</FlightSearchText>
        </div>
      </div>
      <div className="search-results--section">
        <div className="search-result--content m-l-1">
          <FlightSearchText>$ {roundedPrice}</FlightSearchText>
          <FlightSearchText size="sm">Round-trip</FlightSearchText>
        </div>
      </div>
    </div>
  );
}

FlightSearchItem.propTypes = {
  flight: FlightSearchResultPropType,
};

export default FlightSearchItem;
