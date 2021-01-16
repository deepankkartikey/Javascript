console.log("ES6 Classes and Inheritance");

class Employee {
  constructor(name, exp, division) {
    this.name = name;
    this.experience = exp;
    this.division = division;
  }

  goal() {
      return `Side-Hustle: ${this.name}, Passive Income is goal`;
  }
  static hike() {
      return `Salary = Salary*exp*0.2`;
  }  
}

class Programmer extends Employee {
    constructor(name, exp, division, lang, github){
        super(name, exp, division);
        this.language = lang;
        this.github = github;
    }
    static favLang() {
        if(this.language == 'Python'){
            return 'Python';
        }else {
            return 'JavaScript';
        }
    }
}



dk = new Employee('Deepank',3,'Dev');
console.log(dk);
console.log(dk.goal());
console.log(Employee.hike());

dk1 = new Programmer('Deepank', 3 , 'Dev', 'Java','dk120896');
console.log(dk1);
console.log(dk1.goal());
console.log(Programmer.favLang());