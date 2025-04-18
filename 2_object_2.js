//const tinderUser = new Object() // singleton

const tinderUser  = {}
//console.log(typeof tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsloggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        userFirstName : "Atul",
        userLastName : "Vaishya"
    }
}
//console.log(regularUser);
//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFirstName);

const object1 = {1 : "a", 2 : "b"}
const object2 = {3 : "c", 4 : "d"}

// console.log(object1, object2); //Error

//const object3 = Object.assign({}, object1, object2) // method

//console.log(object3);

const object4 = {5 :"e", 6 : "f"}

//object5 = Object.assign({}, object1, object2, object3, object4)

//console.log(object4); // another example

const object5 = {...object1,...object2,...object4}

console.log(object5);



