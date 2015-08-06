NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {

  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new NewsReader.Collections.Feeds();
    this.feedsIndex();
  },

  feedsIndex: function () {
    var view = new NewsReader.Views.FeedsIndex({ collection: this.collection });
    this.collection.fetch();
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }
});
