import ExampleLayout from './views/example/layout';
import NotFound from 'views/not_found/layout'

export default Marionette.AppRouter.extend({
  routes: {
    "": "search",
    "*notFound" : "notFound",
  },

  search: function() {
    PanaClient.mainRegion.show(new ExampleLayout());
  },

  notFound: function() {
    PanaClient.mainRegion.show(new NotFound());
  },

});
