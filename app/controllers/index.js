import Ember from 'ember';
import SchedulesController from './schedules';

export default SchedulesController.extend({
  supportHero: null,

  undoableSchedules: [],

  approvedUndoableSchedules: Ember.computed.filterBy('undoableSchedules', 'approved', true),

  pendingUndoableSchedules: Ember.computed.filterBy('undoableSchedules', 'approved', false)
});
