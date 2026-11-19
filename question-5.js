// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(product,promotionCode){

 let totalPrice = 0;

  for(let eachProduct of product){
    totalPrice = totalPrice +(eachProduct.quantity * eachProduct.price)
  }

  if(promotionCode === "SALE20"){
    totalPrice = totalPrice*80/100
  }else if(promotionCode === "SALE50"){
    totalPrice = totalPrice*50/100
  }else{
    totalPrice = totalPrice
  } 
  return totalPrice
}

console.log(calculateTotalPrice(products,"SALE50"))