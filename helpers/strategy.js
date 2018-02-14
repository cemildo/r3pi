/*
* Default discount strategy
*/
class DefaultDiscountStrategy {
   static run(quantity, price){
    return price * quantity;
   }
}

/*
* get leftovers and substract from total
* quantity, then get 2/3 of that rest number
* then add leftovers then  multiply total result quantity with price.
*/
class PapayaDiscountStrategy {
  static run(quantity, price) {
   const leftOver = quantity % 3;
   return ((quantity - leftOver) * 2/3 + leftOver) * price;
  }
}

export {
  DefaultDiscountStrategy,
  PapayaDiscountStrategy
}
