let products = [
  banana = {
    name: "Banana",
    price: 30,
    quantity: 0,
    productId: 0
  },
  orange = {
    name: "Orange",
    price: 25,
    quantity: 0,
    productId: 1
  },
  mango = {
    name: "Mango",
    quantity: 0,
    price: 40,
    productId: 2
  }
];


let cart = [];
let productId;

function addProductToCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].productId) {
      products[i].quantity += 1;
      if (!cart.includes(products[i])) {
        cart.push(products[i]);
      }
    }
  }
}

function increaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].productId) {
      products[i].quantity += 1;
    }
  }
}

function decreaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].productId) {
      products[i].quantity -= 1;
      if (products[i].quantity < 1) {
        cart.pop(products[i]);
      }
    }
  }
}


function removeProductFromCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].productId) {
      products[i].quantity = 0;
      cart.pop(products[i]);
    }
  }
}

function cartTotal() {
  let productSum;
  let cartSum = 0;

  for (let i = 0; i < products.length; i++) {
    productSum = (products[i].price * products[i].quantity);
    console.log("Product sum of " + products[i].name + " is " + productSum);
    cartSum += productSum;
  }

  console.log("Cart total sum is " + cartSum);
  return cartSum;
}


function emptyCart() {
  cart.length = 0;
}

function pay(amount) {
  let sum = cartTotal();
  if (amount > sum) {
    console.log("Heres your change sir: " + (amount - sum))
  } else {
    console.log("You are down " + (amount - sum));
  }
}

addProductToCart(0);
addProductToCart(0);
addProductToCart(0);
addProductToCart(1);
addProductToCart(1);
addProductToCart(2);

console.log(cart);
