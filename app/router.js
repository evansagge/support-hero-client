import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('schedules', { path: '/' }, function() {
    this.resource('schedule', { path: ':schedule_id' }, function() {
      this.route('undoable');
      this.route('swap');
    });
  });
  this.resource('users', function() {
    this.resource('user', { path: ':user_id' }, function() {
      this.route('schedules', { path: '/' });
      this.route('edit');
    });
  });
});

export default Router;
