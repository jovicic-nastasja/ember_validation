import {
  validatePresence,
  validateLength
} from 'ember-changeset-validations/validators';

export default {
  firstName: [validatePresence(true), validateLength({ min: 3, max: 40 })],
  lastName: [validatePresence(true), validateLength({ min: 3, max: 40 })],
  food: [validatePresence(true)]
};
