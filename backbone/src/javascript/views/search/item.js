import moment from 'moment';
window.moment = moment;

export default Marionette.ItemView.extend({
  template: require('./item.jade'),
  className: 'search-result',

  getFlightNumbers(flights) {
    return flights
      .map(flight => {
        return `${flight.marketingAirlineCode} ${flight.marketingFlightNumber}`;
      })
      .join(', ');
  },

  getFlightDays(arrivesAtMoment, departsAtMoment) {
    const format = 'ddd M/D';
    return departsAtMoment.isSame(arrivesAtMoment, 'day')
      ? departsAtMoment.format(format)
      : `${departsAtMoment.format(format)} - ${arrivesAtMoment.format(format)}`;
  },

  templateHelpers() {
    const firstSegment = this.model.get('segmentsArray')[0];
    const {
      flights,
      airlineUrl,
      endDate,
      startDate,
      to: toAirport,
      from: fromAirport,
    } = firstSegment;
    const departsAtMoment = moment(startDate);
    const arrivesAtMoment = moment(endDate);

    return {
      airlineUrl,
      toAirport,
      fromAirport,
      flightNumbers: this.getFlightNumbers(flights),
      flightDays: this.getFlightDays(departsAtMoment, arrivesAtMoment),
      seatsRemaining: flights[0].seatsRemaining,
      flightClass: this.model.get('class'),
      price: Math.round(this.model.get('price')),
    };
  },
});
