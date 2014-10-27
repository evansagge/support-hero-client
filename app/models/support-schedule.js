import DS from 'ember-data';

var a = DS.attr, b = DS.belongsTo;

export default DS.Model.extend({
  date:     a('moment'),
  position: a('number'),
  user:     b('user')
});
