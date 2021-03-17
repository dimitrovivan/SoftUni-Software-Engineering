function solve() {


    class Person {
        
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }
    
    class Teacher extends Person {
    
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
             
            return super.toString() + `,course: ${this.subject})`;

        }
    }

    class Student extends Person {
        
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString() + `,course: ${this.subject})`;

        }
    }
    
    // function Person2(name , email) {
    //     this.name = name;
    //     this.email = email;
    // }
    
    // function Teacher2(name, email, subject) {
        
    //     Person2.call(this, name, email);
    //     this.subject = subject;
    // }
    
    return {
        Person,
        Teacher,
        Student,
    }
    }
    
    let builder = solve();
    let person1 = new builder.Person('Ivan','asdasd');
    let teacher1= new builder.Teacher('Nachvea','asdasa12f12f12f12d','JS');
    let student1 = new builder.Student('Vabjo1','asofpaposf','KS');

    console.log(person1.toString());
    console.log(teacher1.toString());
    console.log(student1.toString());
