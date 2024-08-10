import { Employee } from "../models/Employee";
import { config } from "../config";

const employessApiUrl = config.baseApiUrl + "/employees/";

export const createEmployee = (newEmployee: Omit<Employee, 'id'>) => {
    const apiUrl = employessApiUrl;

    return fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newEmployee)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Cannot add new employee');
        }
    })
}

export const editEmployee = (employee: Employee) => {
    const apiUrl = employessApiUrl  + employee.id;

    return fetch(apiUrl, {
        method: "PUT",
        body: JSON.stringify(employee)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Cannot edit employee');
        }
    })
}

export const getEmployee = (id: string): Promise<Employee> => {
    const apiUrl = employessApiUrl  + id;

    return fetch(apiUrl, { method: "GET"}).then(response => {
        if (response.ok) {
            return response.json().then(
                (data) => {
                    return { ...data, birthdate: new Date(data.birthdate)}
                }
            );
        } else {
            throw new Error('Cannot find employee with id ' + id);
        }
    })
}

export const getAllEmployees = (): Promise<Employee[]> => {
    const apiUrl = employessApiUrl;

    return fetch(apiUrl, { method: "GET" }).then(response => {
        if (response.ok) {
            return response.json().then(data => {
                const employees = data as Employee[];
                return employees.map(employee => {
                    employee.birthdate = employee.birthdate ?  new Date(employee.birthdate) : null;
                    return employee;
                })
            })
            
        } else {
            throw new Error('Cannot fetch list of employees!');
        }
    })
} 

export const deleteEmployees = (id: string): Promise<boolean> => {
    const apiUrl = employessApiUrl + id;

    return fetch(apiUrl, { method: "DELETE" }).then(response => {
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    })
} 