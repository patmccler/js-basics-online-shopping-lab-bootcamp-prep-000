var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice()
{
  return (Math.random() * (99) + 1)
}

function addToCart(item) {
  var item_obj = { [item]:getRandomPrice()}
  cart.push(item_obj)
  return
}

function viewCart() {
  for(let i = 0; i < cart.length; i++) {

  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
