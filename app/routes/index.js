import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var supportHeroId = moment().format('YYYY-MM-DD'),
        supportHero = this.store.find('supportSchedule', supportHeroId),
        schedules = this.store.find('supportSchedule');

    return Ember.RSVP.hash({ supportHero: supportHero, schedules: schedules });
  },

  setupController: function(controller, model) {
    controller.setProperties({
      model: model.schedules,
      user: this.get('session.currentUser'),
      supportHero: model.supportHero,
    });
  }
});

