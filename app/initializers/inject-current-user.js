export function initialize(container, application) {
  var controller = container.lookup('session:current-user'),
      store = container.lookup('store:main');
  controller.set('model', store.find('user', 'me'));

  application.inject('controller', 'currentUser', 'session:current-user');
  application.inject('route', 'currentUser', 'session:current-user');
  application.inject('component', 'currentUser', 'session:current-user');
}

export default {
  name: 'inject-current-user',
  after: ['register-current-user', 'store'],
  initialize: initialize
};
