NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feed_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template( {feed: this.model }));
    // debugger
    this.model.entries().each(function (entry) {
      var entryView = new NewsReader.Views.EntriesIndexItem({ model: entry });
      this.$('ul.entries-list').append(entryView.render().$el);
    }.bind(this));

    return this;
  }
});
