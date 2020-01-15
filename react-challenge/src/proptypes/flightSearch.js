import PropTypes from 'prop-types';

export const FlightSearchFlightPropType = PropTypes.shape({
  /**
   * Start and End Date are the "real" flight date-times in the origin
   * and destination's time zone and can be used to display what dates
   * the traveler will be traveling
   */
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,

  /**
   * Arrives and departs at represent the dates in UTC
   * and can be used to accurately calculate total flight time
   */
  arrivesAt: PropTypes.string.isRequired,
  departsAt: PropTypes.string.isRequired,

  aircraft: PropTypes.string,
  airline: PropTypes.string.isRequired,
  fareClass: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
  fromCity: PropTypes.string.isRequired,
  fromTimezone: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  marriageGrp: PropTypes.string.isRequired,
  marketingAirlineCode: PropTypes.string.isRequired,
  marketingFlightNumber: PropTypes.string.isRequired,
  mealCode: PropTypes.string,
  operatingAirlineCode: PropTypes.string.isRequired,
  operatingFlightNumber: PropTypes.string.isRequired,
  possiblePremiumUpgrade: PropTypes.bool.isRequired,
  seatsRemaining: PropTypes.number.isRequired,
  toCity: PropTypes.string.isRequired,
  toTimezone: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  travelTime: PropTypes.number.isRequired,
});

export const FlightSearchSegmentPropType = PropTypes.shape({
  airlineUrl: PropTypes.string.isRequired,
  airline: PropTypes.string.isRequired,
  arrivesAt: PropTypes.string.isRequired,
  departsAt: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  flights: PropTypes.arrayOf(FlightSearchFlightPropType).isRequired,
  fromCity: PropTypes.string.isRequired,
  fromTimezone: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  layoverCount: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  toCity: PropTypes.string.isRequired,
  toTimezone: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  travelTime: PropTypes.number.isRequired,
});

export const FlightSearchResultPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cabinType: PropTypes.string,
  class: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  negotiatedRate: PropTypes.bool.isRequired,
  cardableType: PropTypes.string.isRequired,
  bookable: PropTypes.bool.isRequired,
  priceCheck: PropTypes.bool.isRequired,
  basicEconomy: PropTypes.bool.isRequired,
  searchId: PropTypes.string.isRequired,
  segmentsArray: PropTypes.arrayOf(FlightSearchSegmentPropType),
  score: PropTypes.number.isRequired,
});
