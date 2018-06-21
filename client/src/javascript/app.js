import Router from './router';

window.PanaClient = new Marionette.Application();

PanaClient.addRegions({
  mainRegion: ".app-root",
});

PanaClient.on('start', () => {
  PanaClient.router = new Router();
  Backbone.history.start({pushState: true});
});

PanaClient.start();
