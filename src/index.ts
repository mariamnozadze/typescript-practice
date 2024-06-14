// example 1
export interface UserInterface {
    id: number;
    name: string;
    age?: number;
    greet(message: string): void;
}

export const User: UserInterface = {
    id: 1,
    name: 'John Doe',
    age: 30,
    greet(message) {
        console.log(message);
    }
};


// example 2
export interface BusinessPartner {
    name: string;
    creditScore: number;
}

export interface UserIdentity {
    id: string;
    email?: string;
}

export type Employee = BusinessPartner & UserIdentity;

export const signContact = (employee: Employee): void => {
    console.log("Contract signed by " + employee.name + " with email: " + employee.email);
};



//example 3
export interface Worker {
    readonly employeeID: number;
    readonly startDate: Date;

    name: string;
    department: string;
}

const worker: Worker = {
    employeeID: 123,
    startDate: new Date(),
    name: "Mia",
    department: "Tech"
}

worker.name = "Charlotte";
// worker.employeeID = 124214;

console.log(worker)


