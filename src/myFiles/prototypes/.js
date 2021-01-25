
const  mouse = {
    weight: 2,
    getWeight: function(){
        return this.weight;
    }
};

function Mouse(color,weight){
    this.type = 'mouse',
    this.color = color,
    this.weight = weight
};
Mouse.prototype.sleep = function(){
    console.log('sleeping...');
}
const jerry = new Mouse('orange', 20);
jerry.sleep();
console.log(jerry.sleep());