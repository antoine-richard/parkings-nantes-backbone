define([
  'backbone',
  'text!templates/error.html'
], function(Backbone, errorTemplate) {

  var ErrorView = Backbone.View.extend({

    el: $("#card"),

    template: _.template(errorTemplate),

    render: function() {
      this.$el.html(this.template());
    }

  });

  return ErrorView;
});