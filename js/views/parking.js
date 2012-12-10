define([ 
  'underscore', 
  'backbone',
  'text!templates/parking.html'
], function(_, Backbone, parkingTemplate) {

  var ParkingView = Backbone.View.extend({

    tagName: "li",

    template: _.template(parkingTemplate),

    events: {
      'click': 'flip'
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    flip: function() {
      $('#card').addClass('flipped');
    }

  });

  return ParkingView;
});