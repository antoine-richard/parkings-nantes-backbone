define([
  'backbone',
  'text!templates/parking-detailed.html'
], function(Backbone, parkingDetailedTemplate) {

  var ParkingDetailedView = Backbone.View.extend({

    el: $("#details"),

    template: _.template(parkingDetailedTemplate),

    events: {
      'click': 'flip'
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    flip: function() {
      $('#card').removeClass('flipped');
      // TODO: cleanup
      //this.remove(); // zieuter source
    }

  });

  return ParkingDetailedView;
});