let fruitInventory = ["Apples", "Peaches", "Pumpkins", "Endives"];
let fruitPrices = [1, 1.5, 7, 12];
let fruitSales = [30, 17, 20, 10];

for (let i = 0; i < fruitInventory.length; i++) {
    console.log(fruitPrices[i]*fruitSales[i]);
}