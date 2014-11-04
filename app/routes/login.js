import Ember from 'ember';

export default Ember.Route.extend({
  // clear a potentially stale error message from previous login attempts
  setupController: function(controller) {
    controller.set('errorMessage', null);
  }
});
