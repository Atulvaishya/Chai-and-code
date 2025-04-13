// Stack (primitive), Heap (non-primitive)

let myYoutube = "atuldotcom"
let anotherName = myYoutube

console.log(anotherName);
anotherName = "chaiAurCode"
// console.log(myYoutube);
// console.log(anotherName);


let user = {
    email: "user@gmail.com",
    upi : "8388@ok"
}
console.log(user);

let user2 = user
console.log(user2);

user2.email = "atul@gmail.com"

console.log(user.email);
console.log(user2.email);



