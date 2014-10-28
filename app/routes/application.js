import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    goToSchedules: function(date) {
      this._goToSchedules(date);
    }
  },

  _goToSchedules: function(date) {
    this.transitionTo('schedules', { queryParams: { year: date.year(), month: date.month() + 1 } });
  }
});
