import HeaderView from './views/components/header';
import InsructionsLayout from './views/instructions/layout';
import SearchLayout from './views/search/layout';
import NotFound from 'views/not_found/layout';

export default Marionette.AppRouter.extend({
  routes: {
    '': 'root',
    instructions: 'instructions',
    search: 'search',
    '*notFound': 'notFound',
  },

  root() {
    PanaClient.router.navigate('/instructions', { trigger: true });
  },

  instructions() {
    this._renderView(InsructionsLayout);
  },

  search() {
    this._renderView(SearchLayout);
  },

  notFound() {
    this._renderView(NotFound);
  },

  _renderView(View, options) {
    PanaClient.headerRegion.show(new HeaderView());
    PanaClient.mainRegion.show(new View(options));
  },
});
