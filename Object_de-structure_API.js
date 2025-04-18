[
    {
        
    },
    {

    }, 
    {

    }
]// It is possible

//++++++++++++++++++++++++++++++++++++++++++++++

const tinderUser  = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsloggedIn = false;

//user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));

const cource = {
    courceName : "js_Hindi",
    price : 999,
    courceInstructer : "Atul"
}

console.log(cource.courceInstructer) //1st method

const {courceInstructer : instructer} = cource

console.log(instructer);
