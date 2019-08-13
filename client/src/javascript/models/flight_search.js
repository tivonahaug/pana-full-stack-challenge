import { Model, Collection } from 'models/default';

export const FlightSearchModel = Model.extend({
  parse(flight) {
    if (Array.isArray(flight) && flight.length) {
      return flight[0];
    }
    return flight;
  },
});

export const FlightSearchCollection = Collection.extend({
  model: FlightSearchModel,

  url() {
    return `${this.serverUrl}/flights`;
  },
});

export const FlightSearch = Model.extend({
  defaults() {
    return {
      currentPage: 1,
      fullResults: new FlightSearchCollection(),
      paginatedResults: new FlightSearchCollection(),
    };
  },

  search() {
    this.get('fullResults')
      .fetch()
      .then(() => {
        this.setPaginatedResults();
      })
      .catch(console.error);
  },

  setPaginatedResults(a = 1) { 
    var slice1 = (a *20) -20
    var slice2 = a * 20
    const fullResults = this.get('fullResults');
    const paginatedResults = fullResults.slice(slice1, slice2);
    this.get('paginatedResults').reset(paginatedResults);
  },
});
