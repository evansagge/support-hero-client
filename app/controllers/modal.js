import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      if (this.content) {
        this.content.rollback();
      }
      return this.send('closeModal');
    }
  }
});

