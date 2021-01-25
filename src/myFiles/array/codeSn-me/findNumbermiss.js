// eslint-disable-next-line no-unused-vars
function findNumber(arr){

   // eslint-disable-next-line no-unused-vars
   // eslint-disable-next-line func-names
   // eslint-disable-next-line no-unused-vars
   const arrSorted = arr.sort(function(a,b){
        return a-b;
    });
    let some = 0;
    for (let i = 0; i < arrSorted.length; i++) {
        
        
        // eslint-disable-next-line no-unused-vars
        some+=(arrSorted[i+1]-arrSorted[i]-1);

    }

};

console.log(findNumber());

