import Router from './router';
import DropBehavior from './behaviors/drop';

window.PanaClient = new Marionette.Application();
window.Behaviors = {
  Drop: DropBehavior,
};
Marionette.Behaviors.behaviorsLookup = function() {
  return window.Behaviors;
};

PanaClient.addRegions({
  mainRegion: '.app-region',
  headerRegion: '.header-region',
});

PanaClient.on('start', () => {
  PanaClient.router = new Router();
  Backbone.history.start({ pushState: true });
});

PanaClient.start();
