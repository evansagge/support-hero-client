import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToSchedules: function(date) {
      this._goToSchedules(date);
    }
  },

  _goToSchedules: function(date) {
    this.transitionTo('schedules', { queryParams: { year: date.year(), month: date.month() + 1 } });
  }
});
