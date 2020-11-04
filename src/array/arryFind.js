// same filter # trả vê một phần tử 

// eslint-disable-next-line no-var
var numbers = [1,7,3,4];
// eslint-disable-next-line no-var
var F = numbers.find(function(x){
    console.log(x);
    return x % 2 ===0;

});

console.log("===",F);