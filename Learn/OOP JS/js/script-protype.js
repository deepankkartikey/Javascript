console.log('About Object Prototype in JS');

let p1 = {
    name: 'Deepank',
    age: 24,
    profession: 'dev'
}

console.log(p1);

function person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

person.prototype.getName = function(){
    return this.name;
}

let p2 = new person('Ram',30,'Sell Tea');
console.log(p2);