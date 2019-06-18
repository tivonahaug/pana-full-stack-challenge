module.exports = Marionette.LayoutView.extend({
  className: 'header-wrapper',
  template: require('./header.jade'),
  ui: {
    navigationButton: '.js-navigation-button',
  },
  events: {
    'click @ui.navigationButton': 'handleNavigate',
  },
  handleNavigate(e) {
    const target = $(e.currentTarget).data('target');
    PanaClient.router.navigate(target, { trigger: true });
  },
});
