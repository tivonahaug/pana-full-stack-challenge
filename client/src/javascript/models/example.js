import { Model, Collection } from 'models/default';

export default Model.extend({
  url: function() { return `${this.serverUrl}/example_endpoint` },
});
