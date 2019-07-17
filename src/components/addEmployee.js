import React, { Component } from 'react'; 

class AddEmployee extends Component {
    state = {
        firstName : "",
        lastName : "",
        phoneNumber : "",
        email : "",
        experience : "", 
        dateStarted : ""
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

    handlephoneNumberChange = e => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    handleEmailChange = e => {
        this.setState({
            secondJob: e.target.value
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

    handleSubmit = () => {

        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const phoneNumber = this.state.phoneNumber;
        const email = this.state.email;
        const experience = this.state.experience;
        const dateStarted = this.state.dateStarted;
        const data = { firstName, lastName, phoneNumber, email, experience, dateStarted };
    
        const url = `http://localhost:3000/employee/post/add`;
        const response = fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 200) {
                this.props.history.push("/all");
            }
            console.log("response is", response);
        })
        .catch(err => {
            console.log(err);
        });

    };

    render() {
        return(
            <>
                <h1>Employee Page</h1>
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

export default AddEmployee;