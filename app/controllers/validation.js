import Controller from '@ember/controller';
import UserValidations from '../validations/user';
import { task, timeout } from "ember-concurrency";

export default Controller.extend({
  UserValidations,
  init() {
    this._super(...arguments);

    this.foods = [
      "Pizza",
      "Muffin",
      "Hamburger",
      "Chicken nuggets",
      "Turkey"
    ];
  },
  submit: task(function*(model) {
    yield timeout(1000);
    console.log('submit', model);
    model.save();
  })
});
