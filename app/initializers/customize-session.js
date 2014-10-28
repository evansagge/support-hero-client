import Session from 'simple-auth/session';

var SessionWithCurrentUser = Session.extend({
  currentUser: null,

  setCurrentUser: function() {
    var self = this;

    this.container.lookup('store:main').find('user', 'me').then(function(currentUser) {
      self.set('currentUser', currentUser);
    });
  }.observes('content.access_token')
});

export default {
  name: 'customize-session',

  after: ['store'],

  initialize: function(container) {
    container.register('session:with-current-user', SessionWithCurrentUser);
  }
};
