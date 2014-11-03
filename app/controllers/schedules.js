import Ember from 'ember';

export default Ember.ArrayController.extend({

  queryParams: ['start_date', 'end_date'],

  start_date: function() {
    return moment().startOf('month').format('YYYY-MM-DD');
  }.property(),

  end_date: function() {
    return moment().endOf('month').format('YYYY-MM-DD');
  }.property(),

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
    this.send('goToSchedules', this.get('date').subtract(1, 'month'));
  },

  _goToNextMonth: function() {
    this.send('goToSchedules', this.get('date').add(1, 'month'));
  },

  calendarEvents: function() {
    return this.get('content').map(function(supportSchedule) {
      return {
        id:     'support-schedule-' + supportSchedule.get('id'),
        title:  supportSchedule.get('user.name'),
        allDay: true,
        start:  supportSchedule.get('date')
      };
    });
  }.property('content.length'),

  date: function() {
    return moment({ year: this.get('year'), month: parseInt(this.get('month')) - 1 });
  }.property('year', 'month'),
});
