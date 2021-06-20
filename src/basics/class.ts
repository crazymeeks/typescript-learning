/*class Department {
    
    employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        
    }

    describe(this: Department) {
        console.log(`Department: ${this.id} ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

abstract class ParentClass {

    abstract describe(): void;
}

class ITDeparment extends Department {

    public admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    getAdmins() {
        console.log(this.admins);
    }
}

const it = new ITDeparment('d1', ['Jeff']);

console.log(it);
it.describe();
it.getAdmins();
*/