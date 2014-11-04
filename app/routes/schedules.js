import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    start_date: { refreshModel: true }
  },

  model: function(params) {
    return this.store.find('supportSchedule', params);
  },

  resetController: function (controller, isExiting) {
    if (isExiting) {
      controller.setProperties({ start_date: null, end_date: null });
    }
  }
});
