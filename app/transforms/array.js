import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  serialize: function(value) {
    if (Ember.typeOf(value) === 'array') {
      return value;
    } else {
      return [];
    }
  },

  deserialize: function(value) {
    return value;
  }
});
