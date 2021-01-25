/* eslint-disable no-empty */
// const a = '20000';
// const b = '2000';
// console.log(a > b);

// số nguyên tố

// function isPrimeNumber(n) {

function isPrimeNumber(n) {
  
  const nSqrt = Math.sqrt(n);
  for(let i = 2; i<= nSqrt; i++){
    if (n % i === 0) {

      return false;
      
    }
  }
  return n>2;
}
for(let i = 0; i <= 10; i++){

  if(isPrimeNumber(i)){
    console.log(i);
  }
}