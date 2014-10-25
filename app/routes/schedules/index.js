import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    month: { refreshModel: true },
    year: { refreshModel: true }
  },

  model: function(params) {
    return this.store.find('supportSchedule', params);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    if (Ember.isBlank(controller.get('month'))) {
      var today = moment();
      controller.setProperties({ month: today.month() + 1, year: today.year() });
    }
  },

  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.setProperties({ year: null, month: null });
    }
  }
});
