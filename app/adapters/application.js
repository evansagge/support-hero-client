import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host:      'https://support-hero-api.herokuapp.com'
});
