import { FlightSearch } from 'models/flight_search';
import FiltersView from './filters/layout';
import ListView from './list';

export default Marionette.LayoutView.extend({
  template: require('./layout.jade'),
  regions: {
    headerRegion: '.js-search-header-region',
    resultsRegion: '.js-results-region',
  },

  initialize() {
    this.flightSearch = new FlightSearch();
  },

  onRender() {
    this.renderFilters();
    this.renderResults();
  },

  renderFilters() {
    this.headerRegion.show(
      new FiltersView({
        flightSearch: this.flightSearch,
      })
    );
  },

  renderResults() {
    this.resultsRegion.show(
      new ListView({
        flightSearch: this.flightSearch,
      })
    );
  },
});
