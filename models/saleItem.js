import {
  DefaultDiscountStrategy,
  PapayaDiscountStrategy } from '../helpers/strategy';

export default class SaleItem{
  constructor(item, quantity){
    this.item = item;
    this.quantitiy = quantity;

    this.strategy = DefaultDiscountStrategy;

    if(this.item.getName() === "papaya") {
      this.strategy = PapayaDiscountStrategy;
    }
  }

  getItem () {
    return this.item;
  }

  setItems(item){
    this.item = item;
  }

  getQuantity() {
    return this.quantitiy;
  }

  setQuantity(quantitiy) {
    this.quantitiy = quantitiy;
  }

  getTotalPrice() {
    return this.strategy
            .run(this.getQuantity(), this.item.getPrice());
  }

}
