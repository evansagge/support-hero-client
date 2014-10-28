import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('supportSchedule', { month: null, year: null });
  },

  setupController: function(controller, model) {
    var supportHeroId = moment().format('YYYY-MM-DD'),
        supportHero = this.store.getById('supportSchedule', supportHeroId);

    controller.setProperties({ model: model, supportHero: supportHero });
  }
});
