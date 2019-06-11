import ExampleModel from 'models/example';

export default Marionette.LayoutView.extend({
  template: require('./layout.jade'),
  initialize() {
    this.model = new ExampleModel({
      title: 'Welcome to the Pana Code Challenge!',
    });

    this.model.fetch().then(() => {
      this.render();
    });
  },
});
