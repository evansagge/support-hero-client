import Ember from 'ember';

export default Ember.Component.extend({
  events: [],

  startDate: null,

  endDate: null,

  _initializeCalendar: function() {
    var self = this;

    return $('.full-calendar').fullCalendar({
      events: this.get('events'),
      timezone: 'local',
      defaultDate: this.get('startDate'),
      viewRender: function(view) {
        self.setProperties({
          startDate: view.intervalStart.format('YYYY-MM-DD'),
          endDate: view.intervalEnd.subtract(1, 'day').format('YYYY-MM-DD')
        });
      }
    });
  }.on('didInsertElement'),

  _observeEvents: function() {
    $('.full-calendar').fullCalendar('removeEvents');
    this.get('events').forEach(function(event) {
      $('.full-calendar').fullCalendar('renderEvent', event);
    });
  }.observes('events.length')

});
