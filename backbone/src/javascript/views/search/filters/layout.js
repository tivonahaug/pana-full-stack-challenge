export default Marionette.LayoutView.extend({
  template: require('./layout.jade'),
  behaviors: {
    Drop: {},
  },
  className: 'search-results__filter-group',

  onDropdownActionClicked($target) {
    const actionType = $target.data('actionType');
    const value = $target.data('value');
    switch ($target.data('actionType')) {
      case 'sortBy':
        return this.handleSortBy(value);
      case 'airline':
        return this.handleFilterByAirline(value);
    }
  },

  handleSortBy(value) {},

  handleFilterByAirline() {},

  templateHelpers() {
    return {
      sortByString: 'TODO',
    };
  },
});
