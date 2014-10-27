import Ember from 'ember';
import SchedulesControllerMixin from 'support-hero-client/mixins/schedules-controller';

module('SchedulesControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var SchedulesControllerObject = Ember.Object.extend(SchedulesControllerMixin);
  var subject = SchedulesControllerObject.create();
  ok(subject);
});
