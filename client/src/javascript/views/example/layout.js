import ExampleModel from 'models/example';

export default Marionette.LayoutView.extend({
  template: require('./layout.jade'),
  initialize: function () {
    this.model = new ExampleModel({
      title: 'Welcome to the Pana Code Challenge!'
    });
  }
});
