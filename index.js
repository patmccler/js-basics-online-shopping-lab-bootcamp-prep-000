var cart = [];

addToCart("stuff")

viewCart()

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice()
{
  return Math.floor(Math.random() * (99) + 1)
}

function addToCart(item) {
  var item_obj = { [item]: getRandomPrice()}
  cart.push(item_obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length > 0) {
    var cart_items_list = "In your cart, you have "
    for(let i = 0; i < cart.length; i++) {
      item = cart[i]
      cart_item_key = Object.keys(item)[0]
      console.log(cart_item_key)

      cart_items_list += `${cart[i][cart_item_key]}`

    }

    console.log(cart_items_list)
  }
  else {
    console.log("Your shopping cart is empty.")
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
