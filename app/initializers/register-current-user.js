import Controller from '../controllers/current-user';

export function initialize(_container, application) {
  application.register('session:current-user', Controller, { singleton: true });

  application.inject('controller', 'currentUser', 'session:current-user');
  application.inject('route', 'currentUser', 'session:current-user');
  application.inject('component', 'currentUser', 'session:current-user');
}

export default {
  name: 'register-current-user',
  initialize: initialize
};
