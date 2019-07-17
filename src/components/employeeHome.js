import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddEmployee from './addEmployee';

class EmployeeHome extends Component {
    state = {
        employees: []
    };

    async componentDidMount() {
        const employees = await this.loadData();
        console.log("employees", employees);
        this.setState({
            employees
        });
    }

    loadData = async () => {
        const url = "http://localhost:3000/employee/all";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    handleChange = async event => {
        const changeValue = await this.setState({
            employees: event.target.value
        });
        console.log(changeValue);
        return changeValue;
    };

    render() {
        const { employees } = this.state;

        return(
            <>
                <h2>Employee Name</h2>
                <ul>
                    {employees.map(employee => {
                        console.log('employee', employee);
                        return ( 
                            <li key={`employee-${employee.id}`}>
                                <Link to={`/employee/${employee.id}`}>{employee.firstname}</Link>
                            </li>
                        );
                    })}
                </ul>
                <AddEmployee />
            </>
        );
    }
}

export default EmployeeHome;