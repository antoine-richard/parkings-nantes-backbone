define([
  'backbone',
  'text!templates/parking.html',
  'views/parking-detailed'
], function(Backbone, parkingTemplate, ParkingDetailedView) {

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
      var detailedView = new ParkingDetailedView({ model: this.model }).render();
      $('#card').addClass('flipped');
    }

  });

  return ParkingView;
});