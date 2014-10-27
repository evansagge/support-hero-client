import Ember from 'ember';
import SchedulesController from '../mixins/schedules-controller';

export default Ember.ArrayController.extend(SchedulesController, {
  supportHero: null,

  date: function() {
    return moment();
  }.property()
});
