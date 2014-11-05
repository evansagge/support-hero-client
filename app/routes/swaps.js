import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    cancelSwapRequest: function(swappedSchedule) {
      return swappedSchedule.destroyRecord();
    },

    rejectSwapRequest: function(swappedSchedule) {
      swappedSchedule.set('status', 'rejected');
      return swappedSchedule.save();
    },

    acceptSwapRequest: function(swappedSchedule) {
      swappedSchedule.set('status', 'accepted');
      return swappedSchedule.save();
    }
  },

  model: function() {
    return this.store.find('swappedSchedule', { original_user: this.get('currentUser.id') });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    this.store.find('swappedSchedule', { target_user: this.get('currentUser.id'), pending: true }).
      then(function(swappedSchedules) {
      controller.set('requestedSwappedSchedules', swappedSchedules);
    });
  },
});
