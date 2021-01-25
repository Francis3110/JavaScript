
let a = 'hello';
fisrt();
function fisrt(){
    let b = 'Hi!';
    second();
    function second(){
        let c = 'Hey!';
        third();
    }
}
function third(){
    let d = 'John';
    console.log(a);
}