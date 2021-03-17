function solve() {


class Person {
    
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {

    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}

function Person2(name , email) {
    this.name = name;
    this.email = email;
}

function Teacher2(name, email, subject) {
    
    Person2.call(this, name, email);
    this.subject = subject;
}

return {
    Person2,
    Teacher2,
}
}

let builder = solve();

let person1 = new builder.Teacher2('Ivan', 'bgivan@gil.cv', 'JS');
console.log(person1);