import {
  Apple, Orange, Papaya, Banana
} from '../models';

export default class Factory {

  static getInstance(objectName) {
    switch (objectName) {
      case 'apple':
        return new Apple();
      case 'orange':
        return new Orange();
      case 'banana':
        return new Banana();
      case 'papaya':
        return new Papaya();
      default:
        return `Please add item!`;
    }
  }
}
