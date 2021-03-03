class Person {
    
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

function solve() {

    let objArr = [];

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('Ivan', 'Simpson', 22, 'anna@yahoo.com');
    let person3 = new Person('Georgi', 'Simpson', 22, 'anna@yahoo.com');

    objArr.push(person1,person2,person3);

    objArr.forEach(obj => {
        console.log(obj.toString());
    });
}


solve();