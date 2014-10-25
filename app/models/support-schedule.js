import DS from 'ember-data';

var a = DS.attr, b = DS.belongsTo;

export default DS.Model.extend({
  date:     a('isodate'),
  position: a('number'),
  user:     b('user', { async: true })
});
