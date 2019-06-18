export default Marionette.ItemView.extend({
  template: require('./item.jade'),
  className: 'search-result',
  initialize() {},

  templateHelpers() {
    const primarySegment = this.model.get('segmentArray');
    return {
      airlineUrl: primarySegment.airlineUrl,
      seatsRemaining: primarySegment.flights[0].seatsRemaining,
      fromAirport: primarySegment.from,
      toAirport: primarySegment.to,
      flightClass: this.model.get('class'),
      price: Math.round(this.model.get('price')),
    };
  },
});
