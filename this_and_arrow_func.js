const user = {
    username : "Atul",
    price : 999,

    wlecome : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
//user.wlecome()
user.username = "sam"
// user.wlecome()

//console.log(this);

// function chai(){
//     username : "Atul",
//     console.log(this);
    
// }
// chai()

//==========================================

//const addTwoNum = (num1 , num2) => {
 //   return num1 + num2
//}
//console.log(addTwoNum(1,2)); // simple method (basic arrow function)

//const addTwoNum = (num1 , num2) => num1 + num2
//console.log(addTwoNum(1,2)); // another method (implecit return)
//===================

const addTwoNu = (num1 , num2) => ({username : "Atul"})
console.log(addTwoNu(2,3));

