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

  setPaginatedResults() {
    const fullResults = this.get('fullResults');
    const paginatedResults = fullResults.slice(0, 5);
    this.get('paginatedResults').reset(paginatedResults);
  },
});
