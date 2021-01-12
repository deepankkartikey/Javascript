console.log('Prototype Inheritance');

const proto = {
    slogan: function() {
        return 'The Best Company';
    },
    changeName: function(newName) {
        this.name = newName;
    }
}

const dk = Object.create(proto);
dk.name = 'Deepank';
dk.role = 'DEV';
dk.changeName('Deepank Kartikey')
// console.log(dk);

const dk1 = Object.create(proto, {
    // writable makes the property editable
    name: {value: 'deepank', writable:true},
    role: {value:'dev'}
});
dk1.changeName('kartikey deepank')
// console.log(dk1);

function Employee(name, salary, exp){
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}

Employee.prototype.slogan = function() {
    return `This is NOT the best company. Regards, ${this.name}`;
}

let dkobj = new Employee('Kartikey',34567,2);
console.log(dkobj.slogan());

function Developer (name, salary, exp, language){
    Employee.call(this, name, salary, exp);
    this.language = language;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

let dkdev = new Developer('KD',73583,2,'Java');
console.log(dkdev);

