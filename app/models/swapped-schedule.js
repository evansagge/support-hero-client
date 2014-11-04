import DS from 'ember-data';

var a = DS.attr, b = DS.belongsTo;

export default DS.Model.extend({
  originalDate: a('moment'),
  originalUser: b('user'),
  targetDate:   a('moment'),
  targetUser:   b('user'),
  status:       a('string'),
  accepted:     a('boolean')
});
