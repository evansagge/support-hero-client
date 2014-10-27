import Ember from 'ember';
import SchedulesRoute from '../schedules/index';

export default SchedulesRoute.extend({
  actions: {
    goToSchedules: function(date) {
      this._goToSchedules(date);
    }
  },

  model: function(params) {
    var user = this.modelFor('user'),
        supportSchedules;

    params.user_id = user.get('id');
    supportSchedules = this.store.find('supportSchedule', params);

    return Ember.RSVP.hash({ user: user, supportSchedules: supportSchedules });
  },

  setupController: function(controller, model) {
    this._super(controller, model.supportSchedules);
    controller.set('user', model.user);
  },

  _goToSchedules: function(date) {
    this.transitionTo('user.schedules', { queryParams: { year: date.year(), month: date.month() + 1 } });
  }
});
