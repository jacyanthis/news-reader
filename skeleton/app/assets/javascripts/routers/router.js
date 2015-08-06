NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new NewsReader.Collections.Feeds();
  },

  feedsIndex: function () {
    var view = new NewsReader.Views.FeedsIndex({ collection: this.collection });
    this.collection.fetch();
    this._swapView(view);
  },

  feedShow: function (id) {
    // debugger
    var feed = this.collection.getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({ model: feed });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }
});
