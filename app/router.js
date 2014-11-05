import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('index', { path: '/' });
  this.resource('schedules', { path: 'schedules' }, function() {
    this.resource('schedule', { path: ':schedule_id' });
  });
  this.resource('swaps');
  this.resource('users', function() {
    this.resource('user', { path: ':user_id' }, function() {
      this.route('edit');
    });
  });
});

export default Router;

