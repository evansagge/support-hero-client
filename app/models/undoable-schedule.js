import DS from 'ember-data';

var a = DS.attr, b = DS.belongsTo;

export default DS.Model.extend({
  date:     a('moment'),
  reason:   a('string'),
  approved: a('boolean'),
  user:     b('user')
});
