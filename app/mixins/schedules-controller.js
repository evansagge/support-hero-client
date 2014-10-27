import Ember from 'ember';

export default Ember.Mixin.create({

  actions: {
    goToPreviousMonth: function() {
      this._goToPreviousMonth();
    },

    goToNextMonth: function() {
      this._goToNextMonth();
    }

  },

  _goToPreviousMonth: function() {
    this.send('goToSchedules', this.get('date').subtract(1, 'month'));
  },

  _goToNextMonth: function() {
    this.send('goToSchedules', this.get('date').add(1, 'month'));
  }
});
