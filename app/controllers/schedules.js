import Ember from 'ember';

export default Ember.ArrayController.extend({

  queryParams: ['start_date'],

  start_date: null,

  user: Ember.computed.alias('session.currentUser'),

  isCurrentUser: function() {
    return this.get('user.id') === this.get('session.currentUser.id');
  }.property('user.id'),

  userName: function() {
    return this.get('isCurrentUser') ? 'Your' : this.get('user.name') + '\'s';
  }.property('isCurrentUser', 'user.id'),

  userSchedules: function() {
    var self = this;

    return this.get('content').filter(function(schedule) {
      return schedule.get('user.id') === self.get('user.id');
    });
  }.property('content.length'),

  currentMonth: function() {
    return this.get('start_date') ? moment(this.get('start_date')).date(1) : moment().date(1);
  }.property('start_date'),

  previousMonth: function() {
    return moment(this.get('currentMonth')).subtract(1, 'month').format('YYYY-MM-DD');
  }.property('currentMonth'),

  nextMonth: function() {
    return moment(this.get('currentMonth')).add(1, 'month').format('YYYY-MM-DD');
  }.property('currentMonth')
});
