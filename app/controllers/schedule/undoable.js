import ModalController from '../modal';
import EmberValidations from 'ember-validations';

export default ModalController.extend(EmberValidations.Mixin, {
  validations: {
    date: {
      presence: true
    },
    reason: {
      presence: true
    }
  },

  actions: {
    submit: function() {
      var self = this,
          content = this.get('content');

      this.validate().then(function() {
        content.save().then(function() {
          self.send('closeModal');
          self._afterSaveSuccess();
        });
      });
    }
  },

  _afterSaveSuccess: function() {
    var formattedDate = moment(this.get('date')).format('MMMM DD, YYYY');

    this.send('showNotification', 'A request has been submitted to skip the schedule for ' +
      formattedDate + '. This will need to be approved by your manager.');
  }
});

