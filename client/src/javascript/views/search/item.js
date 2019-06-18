export default Marionette.ItemView.extend({
  template: require('./item.jade'),
  className: 'search-result',
  initialize() {},

  templateHelpers() {
    const firstSegment = this.model.get('segmentArray');
    return {
      airlineUrl: firstSegment.airlineUrl,
      seatsRemaining: firstSegment.flights[0].seatsRemaining,
      fromAirport: firstSegment.from,
      toAirport: firstSegment.to,
      flightClass: this.model.get('class'),
      price: Math.round(this.model.get('price')),
    };
  },
});
