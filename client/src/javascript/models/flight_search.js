import { Model, Collection } from 'models/default';

export const FlightSearchModel = Model.extend({});

export const FlightSearchCollection = Collection.extend({
  model: FlightSearchModel,

  // Documentation: https://backbonejs.org/#Collection-parse
  parse(flights) {
    return flights;
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
    const paginatedResults = this.get('fullResults');
    this.get('paginatedResults').reset(paginatedResults.models);
  },
});
