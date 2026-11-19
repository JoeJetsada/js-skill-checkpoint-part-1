// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

// เริ่มเขียนโค้ดตรงนี้
function minFruit(inventory){
  let minFruitName = "";
  let minFruitQuantity = inventory[0].quantity;
  
  for(let i = 0; i < inventory.length; i++){
   if(inventory[i].quantity < minFruitQuantity){
     minFruitQuantity = inventory[i].quantity;
     minFruitName = inventory[i].name;
   }
  } return  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruitName} ซึ่งมี ${minFruitQuantity} ชิ้น`;
}
console.log(minFruit(inventory))
