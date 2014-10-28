import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('index', { path: '/' });
  this.resource('schedule', { path: ':schedule_id' });
  this.resource('users', function() {
    this.resource('user', { path: ':user_id' }, function() {
      this.route('schedules', { path: '/' });
      this.route('edit');
    });
  });
});

export default Router;
