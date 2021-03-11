class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position ,department){
        salary = Number(salary);

        if (!name || salary < 0 || !position || !department) {
            throw new Error('Invalid Input!');
        } else {
            
            if (!this.departments[department]) {
                this.departments[department] = {
                    totalSalary: 0,
                    employees: [],
                }
            }
             
            let employee = {name, salary, position};

            this.departments[department].totalSalary += salary;
            this.departments[department].employees.push(employee);

            console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
        }
    }

    bestDepartment(){

        let sortedKeys = Object.keys(this.departments).sort((firstDepartment, secondDepartment) => {
            
            let firstAvgSalary = this.departments[firstDepartment].totalSalary / this.departments[firstDepartment].employees.length;
            let secondAvgSalary = this.departments[secondDepartment].totalSalary / this.departments[secondDepartment].employees.length;

            return secondAvgSalary - firstAvgSalary;
        })
        
       let bestDepartmentName = sortedKeys.shift();
       let result = `Best department is ${bestDepartmentName}\nAverage salary: ${(this.departments[bestDepartmentName].totalSalary / this.departments[bestDepartmentName].employees.length).toFixed(2)}\n`;

        this.departments[bestDepartmentName].employees.
        sort((firstEmployee,secondEmployee) => secondEmployee.salary - firstEmployee.salary || secondEmployee.name.localeCompare(firstEmployee.name)).
        forEach(employee => {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        });

        return result;
        
    };
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
