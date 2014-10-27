import Ember from 'ember';
import SchedulesController from '../../mixins/schedules-controller';

export default Ember.ArrayController.extend(
  SchedulesController, {

  queryParams: ['start_date', 'end_date'],

  start_date: null,

  end_date: null,

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
