// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({id:5,todo:"Walk the dog"});
myTodo[3]["todo"]="go to the gym";
myTodo.pop();
let idObject4 = myTodo[3].id;
let mytodoObject4 =myTodo[3].todo;

console.log(`To-do id: ${idObject4}, ${mytodoObject4}`);

