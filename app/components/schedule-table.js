import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',

  classNames: ['table table-hover table-schedules'],

  showUser: true,

  showActions: true,

  content: []
});
