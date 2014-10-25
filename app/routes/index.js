import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('supportSchedule', { month: null, year: null });
  },

  setupController: function(controller, model) {
    var supportHeroId = moment().format('YYYY-MM-DD'),
        supportHero = this.store.getById('supportSchedule', supportHeroId);

    controller.setProperties({ model: model, supportHero: supportHero });
  }
});
