// Minimum

let min = (val1, val2) => {
    return (val1 < val2 ? val1 : val2)
}


// Book Solution https://eloquentjavascript.net/code/#3.1

// Recursion

let isEven = (num) => {
    if(num === 1) {
        return false;
    } else if (num === 0){
        return true;
    } else if (num < 0) {
        return isEven(-num) 
    } else {
        return isEven(num-2); 
    } 
} 

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

