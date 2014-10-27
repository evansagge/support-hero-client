import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function (serialized) {
    if (serialized) {
      return moment(serialized);
    }
    return serialized;
  },

  serialize: function (deserialized) {
    if (deserialized) {
      return moment(deserialized).format('YYYY-MM-DD');
    }
    return deserialized;
  }
});
