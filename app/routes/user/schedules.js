import SchedulesRoute from '../schedules/index';

export default SchedulesRoute.extend({
  actions: {
    goToSchedules: function(year, month) {
      this._goToSchedules(year, month);
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

  _goToSchedules: function(year, month) {
    this.transitionTo('user.schedules', { queryParams: { year: year, month: month } });
  }
});
