import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',

  classNames: ['table table-hover table-schedules'],

  showUser: true,

  showActions: true,

  content: [],

  actions: {
    markUndoable: function(schedule) {
      this.sendAction('markUndoable', schedule);
    },

    swap: function(schedule, targetSchedule) {
      this.sendAction('swap', schedule, targetSchedule);
    }
  }
});
