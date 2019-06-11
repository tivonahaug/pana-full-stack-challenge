import { Model, Collection } from 'models/default';

export default Model.extend({
  url() {
    return `${this.serverUrl}/example_endpoint`;
  },
});
