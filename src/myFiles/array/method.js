// object methods hay còn gọi là phương thức

const mypet = {
  wieght: 20,
  name: 'anonymous',
  bark() {
    console.log('...g.gg.g.gg.', this.name);
  },
  eat(bone) {
    this.wieght += bone.wieght;
    return this;
  },
};

const bone = { wieght: 2 };

console.log('before eating: ', mypet.wieght);
console.log('affter eating: ', mypet.eat(bone).wieght);
