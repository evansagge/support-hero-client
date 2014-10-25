import Ember from 'ember';

export default Ember.ArrayController.extend({
  supportHero: null,

  actions: {
    goToPreviousMonth: function() {
      this._goToPreviousMonth();
    },

    goToNextMonth: function() {
      this._goToNextMonth();
    }
  },

  _goToPreviousMonth: function() {
    this.send('goToSchedules', moment().year(), moment().month());
  },

  _goToNextMonth: function() {
    this.send('goToSchedules', moment().year(), moment().month() + 2);
  }
});
