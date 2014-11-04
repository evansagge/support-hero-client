import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import SchedulesRoute from '../schedules';

export default SchedulesRoute.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    var user = this.modelFor('user'),
        supportSchedules;

    supportSchedules = this.store.find('supportSchedule', { start_date: params.start_date });

    return Ember.RSVP.hash({ user: user, supportSchedules: supportSchedules });
  },

  setupController: function(controller, model) {
    controller.setProperties({
      model: model.supportSchedules,
      user: model.user
    });
  }
});
