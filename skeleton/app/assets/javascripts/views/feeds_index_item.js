NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST['feeds_index_item'],

  tagName: 'li',
  className: 'feeds-index-item',

  render: function () {
    this.$el.html(this.template({ feed: this.model }));

    return this;
  }
});
