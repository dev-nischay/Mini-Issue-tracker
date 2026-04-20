const data = [
    { price: 800, quantity: 2 },
    { price: 1200, quantity: 1 },
    { price: 2000, quantity: 3 },
];
let quantity = { products: 0 };
data.forEach((e) => (quantity.products += e.quantity));
console.log(quantity);
data.reduce((a, c) => console.log(a.price, c.price));
export {};
