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

  getFlightDepartArrival(flights) {
    const format = 'h:mm A';
    return flights
      .map(flight => {
        const arrival = moment(flight.arrivesAt)
        const depart = moment(flight.departsAt)
        return `${arrival.format(format)} - ${depart.format(format)}`;
      })
      .join(', ');
  },

  getTotalTime(flights) {
    return flights
      .map(({ travelTime }) => {
        var hours = Math.floor(travelTime / 60);  
        var minutes = travelTime % 60;
        return `${hours}h ${minutes}m`;
      })
      .join(', ');
  },

  getConnections(firstSegment) {
    if(firstSegment.layoverCount != 0){
      return `Connections: ${firstSegment.layoverCount}`;
    }else{
      return 'Nonstop';
    }
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
      flightDepartArrival: this.getFlightDepartArrival(flights),
      flightConnections: this.getConnections(firstSegment),
      flightTotalTime: this.getTotalTime(flights),
      flightDays: this.getFlightDays(departsAtMoment, arrivesAtMoment),
      seatsRemaining: flights[0].seatsRemaining,
      flightClass: this.model.get('class'),
      price: Math.round(this.model.get('price')),
    };
  },
});
