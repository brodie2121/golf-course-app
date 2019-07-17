import React, { Component } from "react";
import {Link } from 'react-router-dom';
class Employees extends Component {
    state = {
        employee: [] 
    }

async componentDidMount() {
    const employee = await this.loadData();
    this.setState({
        employee
    });
}

    loadData = async () => {
        const employeeId = this.props.match.params.employee_id;
        const url = `http://localhost:3000/employee/employees/${employeeId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    deleteData = async () => {
        const employeeId = this.props.match.params.employee_id;
        const url = `http://localhost:3000/employee/delete/${employeeId}`;
        const response = await fetch(url);
        return response;
    };
    
    render() {
        const { employee } = this.state;
        return (
            <div>
                <h4>Employee Info</h4>
                <p>{employee.id}</p>
                <p>{employee.firstname}</p>
                <p>{employee.lastname}</p>
                <p>{employee.phonenumber}</p>
                <p>{employee.email}</p>
                <p>{employee.experience}</p>
                <p>{employee.datestarted}</p>
                <Link onClick={this.deleteData} to={`/`}>
                    Delete Employee
                </Link>
                <Link to={`/edit/${employee.id}`}>Edit Employee</Link>
            </div>
        );
    }
}

export default Employees;