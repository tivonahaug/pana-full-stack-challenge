export const Model = Backbone.Model.extend({
  serverUrl: `${$('html').data('server-url')}`,
});

export const Collection = Backbone.Collection.extend({
  serverUrl: `${$('html').data('server-url')}`,
});

export default {
  Model: Model,
  Collection: Collection,
}
