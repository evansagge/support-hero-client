import Ember from 'ember';
import EmberValidations from 'ember-validations';
import ModalController from '../modal';

export default ModalController.extend(EmberValidations.Mixin, {
  validations: {
    originalDate: {
      presence: true
    },
    originalUser: {
      presence: true
    },
    targetDate: {
      presence: true
    },
    targetUser: {
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
    var formattedOriginalDate = moment(this.get('originalDate')).format('MMMM DD, YYYY'),
        formattedTargetDate = moment(this.get('targetDate')).format('MMMM DD, YYYY');

    this.send('showNotification', 'A request has been submitted to swap your schedule on ' +
              formattedOriginalDate + ' with that of ' + this.get('targetUser.name') + ' on ' +
              formattedTargetDate + '. This will need to be accepted by ' + this.get('targetUser.name') + '.');
  },

  _setTargetUser: function() {
    var targetDate = this.get('targetDate'),
        self = this;

    if (Ember.isBlank(targetDate)) {
      this.set('targetUser', null);
    } else {
      this.store.find('supportSchedule', targetDate).then(function(supportSchedule) {
        self.set('targetUser', supportSchedule.get('user'));
      }, function() {
        self.set('targetUser', null);
      });
    }
  }.observes('targetDate')
});

