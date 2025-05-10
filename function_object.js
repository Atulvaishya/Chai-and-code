/* function sayMyname() {
    console.log("A");
    console.log("t");
    console.log("u");
    console.log("l");
    
}

//sayMyname();

function addTwoNumbers (num1, num2) {

    //console.log(num1 + num2) // 1 but it not print anything;

    let result = num1 + num2 // 2
   //console.log(result)

   return result
}

//addTwoNumbers(1, true)

result = addTwoNumbers(1, 2) 
console.log(`result : `, result);
*/

//==================================

//function loginUser(userName) {
//    return `${userName} is logged in`
//}
//console.log(loginUser("Atul"));
//console.log(loginUser("")); // empty
//console.log(loginUser()); // undefine

// function loginUser(userName) {
//     if(userName === undefined){ // we should use (!username) for same method
//         console.log("Please Enter A Name!");
//         return
        
//     }
//     return `${userName} is logged in`
// }

// console.log(loginUser(123))

//====================================================

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400));



