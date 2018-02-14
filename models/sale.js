import SaleItem from './saleItem';
const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class Sale {

  constructor(enforcer){
    if(enforcer != singletonEnforcer) throw "Cannot construct singleton";
    this.saleItems= [];
  }

  static get instance() {
    if(!this[singleton]) {
      this[singleton] = new Sale(singletonEnforcer);
    }
    return this[singleton];
  }

  setItems(items) {
    this.saleItems = items;
  }

  getItems() {
    return this.saleItems;
  }

  addItem(item) {
    if(!this.contains(item)) {
      this.saleItems.push(new SaleItem(item, 1));
    } else {
      this.saleItems.map(elm => {
        if(elm.getItem().getName() === item.getName()) {
          elm.setQuantity(elm.getQuantity() + 1);
        }
      })
    }
  }

  contains(item){
    const isAvailable = this.saleItems.filter(elm =>
          elm.getItem().getName() === item.getName());
    return isAvailable.length > 0;
  }

  getTotalPrice() {
    return this.saleItems.reduce((a, b) => a + b.getTotalPrice(), 0);
  }

}
