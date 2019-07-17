import React, { Component } from "react";

class EditEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    experience: "", 
    dateStarted: "",
    employee_id: null
  };

  async componentDidMount() {
    const employee = await this.loadData();
    console.log(employee);
    this.setState({
        firstName: employee.firstname,
        lastName: employee.lastname,
        phoneNumber: employee.phonenumber,
        email: employee.email,
        experience: employee.experience, 
        dateStarted: employee.datestarted,
        employee_id: employee.employee_id
    });
  }

    loadData = async () => {
        const employeeId = this.props.match.params.employee_id;
        const url = `http://localhost:3000/employee/employees/${employeeId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        });
    };

    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        });
    };

    handlePhoneNumberChange = e => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handleExperienceChange = e => {
        this.setState({
            experience: e.target.value
        });
    };

    handleDateStartedChange = e => {
        this.setState({
            dateStarted: e.target.value
        });
    };

  handleSubmit = e => {
    e.preventDefault();
    const employeeId = this.props.match.params.employee_id;
    const content = this.state.content;
    const data = { content };
    const url = `http://localhost:3000/employee/employees/update/${employeeId}`;
    const response = fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h2>{this.state.employeeId}</h2>
        <form onSubmit={this.handleSubmit}>
            <label> First Name: </label>
            <input
                type="text"
                onChange={this.handleFirstNameChange}
                name="firstName"
                value={this.state.firstName}
            />
            <label> Last Name: </label>
            <input
                type="text"
                onChange={this.handleLastNameChange}
                name="lastName"
                value={this.state.lastName}
            />
            <label> Phone Number: </label>
            <input 
                type="text"
                onChange={this.handlePhoneNumberChange}
                name="phoneNumber"
                value={this.state.phoneNumber}
            />
            <label> Email: </label>
            <input
                type="text"
                onChange={this.handleEmailChange}
                name="email"
                value={this.state.email}
            />
            <label> Experience: </label>
            <input
                type="text"
                onChange={this.handleExperienceChange}
                name="experience"
                value={this.state.experience}
            />
            <label> Date Started: </label>
            <input
                type="text"
                onChange={this.handleDateStartedChange}
                name="dateStarted"
                value={this.state.dateStarted}
            />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default EditEmployee;