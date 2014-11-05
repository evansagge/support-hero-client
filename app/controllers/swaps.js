import Ember from 'ember';

export default Ember.ArrayController.extend({
  swappedSchedules: Ember.computed.alias('content'),

  requestedSwappedSchedules: [],

  pendingSwappedSchedules: Ember.computed.filterBy('requestedSwappedSchedules', 'status', 'pending')
});
