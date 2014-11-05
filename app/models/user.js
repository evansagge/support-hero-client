import DS from 'ember-data';

var a = DS.attr;

export default DS.Model.extend({
  name:  a('string'),
  roles: a('array'),

  isManager: function() {
    return this.get('roles').contains('manager');
  }.property('roles')
});
