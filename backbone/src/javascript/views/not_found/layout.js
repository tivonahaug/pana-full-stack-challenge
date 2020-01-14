export default Marionette.LayoutView.extend({
  template: require('./layout.jade'),
  events: {
    'click .js-return': 'return',
  },
  return: function() {
    PanaClient.router.navigate('/', { trigger: true });
  },
});
