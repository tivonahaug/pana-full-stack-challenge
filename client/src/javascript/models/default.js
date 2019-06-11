const serverUrl = 'http://localhost:4000';

export const Model = Backbone.Model.extend({
  serverUrl,
});

export const Collection = Backbone.Collection.extend({
  serverUrl,
});

export default {
  Model: Model,
  Collection: Collection,
};
