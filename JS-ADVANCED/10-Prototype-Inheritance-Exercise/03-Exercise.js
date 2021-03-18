function solve() {

    class Employee {
        
        constructor(name, age) {
         
        if (new.target == Employee) {
            throw new Error('Cannot instantiate directly!');
        }
            this.name = name;
            this.age = age;
            this.salary = 0
            this.tasks = [];
        }

        work() {

            let currentTask = this.tasks.shift();
            console.log(`${this.name} ${currentTask}`);
            this.tasks.push(currentTask);

        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + bonuses} this month.`);
        }
    }

    class Junior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on simple task.')
        }
    }

    class Senior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on complicated task.')
            this.tasks.push('is taking time off work.')
            this.tasks.push('is supervising junior workers.')
        }
    }
}