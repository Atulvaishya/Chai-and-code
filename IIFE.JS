// Immediately Invoked Function

// function chai(){
//     console.log(`DB Connected`);
    
// }
// chai() // 1st

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
    
})(); // 2nd this is 'iife' // at the end of a code please use a ';'

( () => {
    console.log(`DB Connected 2`);
    
}
)
() // IIFE methode with arrow functions


