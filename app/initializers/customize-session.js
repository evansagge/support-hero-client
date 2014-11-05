import Ember from 'ember';
import Session from 'simple-auth/session';

export function initialize(container) {
  // application.inject('route', 'foo', 'service:foo');
  Session.reopen({
    setCurrentUser: function() {
      if (!Ember.isEmpty(this.get('access_token'))) {
        var controller = container.lookup('session:current-user'),
            store = container.lookup('store:main');
        controller.set('model', store.find('user', 'me'));
      }
    }.observes('access_token')
  });
}

export default {
  name: 'customize-session',
  before: 'simple-auth',
  initialize: initialize
};
