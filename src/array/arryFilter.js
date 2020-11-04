/* eslint-disable no-var */
// syntax same map 
// return true or false 

var numbers = [-3,-2,-1,1,2,3,4];
var evennumber = numbers.filter(function(x){
    return x > 0 && x % 2 ===0;
});
console.log(evennumber);