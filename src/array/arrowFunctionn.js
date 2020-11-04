// const myFunction = () =>'this is arrow Funnction !';
//  console.log(myFunction());

 const pet = {

    name: 'messi',
    age: 32,
    // eslint-disable-next-line func-names
    infor(){
        return this.name + this.age;
    }
 };
 console.log(pet.infor());