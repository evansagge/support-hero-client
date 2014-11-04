import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    return this.get('session.currentUser');
  },

  actions: {
    markUndoableSchedule: function(schedule) {
      var undoable = this.store.createRecord('undoableSchedule', { date: schedule.get('date') }),
          controller = this.controllerFor('schedule.undoable');

      controller.set('model', undoable);

      this.send('openModal', 'schedule.undoable', controller);
    },

    swapSchedule: function(schedule) {
      var swap = this.store.createRecord('swappedSchedule', {
            originalUser: schedule.get('user'),
            originalDate: schedule.get('date')
          }),
          controller = this.controllerFor('schedule.swap');

      controller.set('model', swap);

      this.send('openModal', 'schedule.swap', controller);
    },

    showNotification: function(content) {
      var controller = this.controllerFor('notification-modal');
      controller.set('model', content);

      this.send('openModal', 'notification-modal', controller);
    },

    openModal: function(template, controller) {
      var opts = {
        into: 'application',
        outlet: 'modal'
      };

      if (!Ember.isBlank(controller)) {
        opts.controller = controller;
      }

      return this.render(template, opts);
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
