import Ember from 'ember';

export default Ember.ObjectController.extend({
  canEdit: function() {
    return this.get('session.currentUser.id') === this.get('user.id') || this.get('session.currentUser.isManager');
  }.property('session.currentUser.id', 'user.id')
});

