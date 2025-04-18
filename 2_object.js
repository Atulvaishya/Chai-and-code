// singleton

//object letrals

const JsUser = {
    name : "Atul",
    Age : 20,
    location : "Haridwar",
    email : "atul@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Mondey", "Tuesday"],

}
// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

JsUser.Age = 24
//console.log(JsUser.Age);

JsUser.greating = function(){
    console.log("Hello Atul");
    
}
console.log(JsUser.greating());

JsUser.greatingTwo = function(){
    console.log(`Hello Atul,  ${this.name}`);
    
}

console.log(JsUser.greatingTwo());




