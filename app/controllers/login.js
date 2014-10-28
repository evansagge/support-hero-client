import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:oauth2-password-grant',

  error: null,

  errorMessage: null,

  actions: {
    // display an error when authentication fails
    authenticate: function() {
      var self = this;
      this._super().then(null, function(error) {
        if (typeof error === 'object' && error.error === 'invalid_resource_owner') {
          self.set('errorMessage', 'You have entered an invalid username/password.');
        } else {
          self.set('errorMessage',
            'An error was encountered while trying to log you into the system. ' <<
            'Please notify your system administrator'
          );
        }
      });
    }
  }
});
