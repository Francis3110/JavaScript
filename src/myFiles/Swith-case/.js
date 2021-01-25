// example
// Syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// thẻ giảm giá   siver : giảm 20% , gol : giảm 50%, kim cuong : giảm 60%
const menber = {
    tier: 'bạc'
}

function getTotal(price,card){

   let  discountRate;

    switch (menber.tier) {
        case 'bạc':
            discountRate = 0.02;
            break;
        case 'vang':
            discountRate = 0.05;
            break;
        case 'kim cuong':
            discountRate = 0.06
            break;
    
        default:
            discountRate = 0.01
            break;
    }
    return price * (1 - discountRate);
}
 const total = getTotal(100,menber);
 console.log(total);

 