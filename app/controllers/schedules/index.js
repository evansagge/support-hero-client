import Ember from 'ember';

export default Ember.ArrayController.extend({

  queryParams: ['month', 'year'],

  month: null,

  year: null,

  actions: {
    goToPreviousMonth: function() {
      this._goToPreviousMonth();
    },

    goToNextMonth: function() {
      this._goToNextMonth();
    }
  },

  _goToPreviousMonth: function() {
    var date = moment({ year: this.get('year'), month: parseInt(this.get('month')) - 2 });
    this.send('goToSchedules', date.year(), date.month() + 1);
  },

  _goToNextMonth: function() {
    var date = moment({ year: this.get('year'), month: parseInt(this.get('month'))});
    this.send('goToSchedules', date.year(), date.month() + 1);
  }
});
