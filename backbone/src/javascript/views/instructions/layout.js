import ExampleModel from 'models/example';

export default Marionette.LayoutView.extend({
  template: require('./layout.jade'),

  initialize() {
    this.model = new ExampleModel({
      title: 'Pana Full-Stack Code Challenge',
    });
  },
});
