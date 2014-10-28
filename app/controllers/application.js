import Ember from 'ember';

export default Ember.Controller.extend({
  startOfMonth: function() {
    return moment().startOf('month').format('YYYY-MM-DD');
  }.property(),

  endOfMonth: function() {
    return moment().endOf('month').format('YYYY-MM-DD');
  }.property(),
});
