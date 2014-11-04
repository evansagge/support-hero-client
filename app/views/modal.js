import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'div',
  classNames: 'modal'.w(),
  didInsertElement: function() {
    this.$().attr('id', 'modal');
    this.$().modal({
      keyboard: false,
      backdrop: 'static'
    });
    return this.$().modal('show');
  },
  willDestroyElement: function() {
    return this.$().modal('hide');
  }
});
