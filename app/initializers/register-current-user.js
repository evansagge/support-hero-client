import Controller from '../controllers/current-user';

export function initialize(_container, application) {
  application.register('session:current-user', Controller, { singleton: true });
}

export default {
  name: 'register-current-user',
  initialize: initialize
};
