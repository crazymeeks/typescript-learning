/*type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Jeff',
    privileges: ['Admin'],
    startDate: new Date(),
};

function myFunc(employee: ElevatedEmployee) {

    console.log(employee);
}

myFunc({
    name: 'Jeff',
    privileges: ['Admin'],
    startDate: new Date(),
});

interface ErrorContainer {
    // index type
    [prop: string]: string;
}

*/