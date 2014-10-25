import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.resource('user', { path: ':user_id' }, function() {
      this.route('schedules', { path: '/' });
      this.route('edit');
    });
  });
  this.resource('schedules', function() {
    this.resource('schedule', { path: ':schedule_id' });
  });
});

export default Router;
