// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
   let numberPassword =  userPassword.length;
    if(numberPassword<6){
        return "Weak";
    }else if(numberPassword>=6 && numberPassword<=10){
        return "Medium";
    }else{
        return "Strong";
    }
}
userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));