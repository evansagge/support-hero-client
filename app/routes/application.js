import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToSchedules: function(year, month) {
      this._goToSchedules(year, month);
    }
  },

  _goToSchedules: function(year, month) {
    this.transitionTo('schedules', { queryParams: { year: year, month: month } });
  }
});
