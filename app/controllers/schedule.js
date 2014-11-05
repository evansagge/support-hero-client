import Ember from 'ember';

export default Ember.ObjectController.extend({
  canEdit: function() {
    return this.get('currentUser.id') === this.get('user.id') || this.get('currentUser.isManager');
  }.property('currentUser.id', 'user.id')
});

