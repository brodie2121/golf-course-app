import React, { Component } from 'react'; 
import '../App.css';

class AddJob extends Component {
    state = {
        posting_date : "",
        firstJob : "",
        commentsFirstJob : "",
        secondJob : "",
        commentsSecondJob : "",
        employee_id : ""
    };

    handleDateChange = e => {
        this.setState({
            posting_date: e.target.value
        });
    };

    handleFirstJobChange = e => {
        this.setState({
            firstJob: e.target.value
        });
    };

    handleCommentsFirstJobChange = e => {
        this.setState({
            commentsFirstJob: e.target.value
        });
    };

    handleSecondJobChange = e => {
        this.setState({
            secondJob: e.target.value
        });
    };

    handleCommentsSecondJobChange = e => {
        this.setState({
            commentsSecondJob: e.target.value
        });
    };

    handleEmployeeChange = e => {
        this.setState({
            employee_id: e.target.value
        });
    };

    handleSubmit = () => {

        const posting_date = this.state.posting_date;
        const firstJob = this.state.firstJob;
        const commentsFirstJob = this.state.commentsFirstJob;
        const secondJob = this.state.secondJob;
        const commentsSecondJob = this.state.commentsSecondJob;
        const employee_id = this.state.employee_id;
        const data = { posting_date, firstJob, commentsFirstJob, secondJob, commentsSecondJob, employee_id };
    
        const url = `http://localhost:3000/dailyjobboard/post/add`;
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
                <h4>New Jobs Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <label> Date: </label>
                    <input
                        type="text"
                        onChange={this.handleDateChange}
                        name="posting_date"
                        value={this.state.posting_date}
                    />
                    <label> first Job: </label>
                    <input
                        type="text"
                        onChange={this.handleFirstJobChange}
                        name="firstJob"
                        value={this.state.firstJob}
                    />
                    <label> Comments First Job: </label>
                    <input
                        type="text"
                        onChange={this.handleCommentsFirstJobChange}
                        name="firstJob"
                        value={this.state.commentsFirstJob}
                    />
                    <label> Second Job: </label>
                    <input
                        type="text"
                        onChange={this.handleSecondJobChange}
                        name="secondJob"
                        value={this.state.secondJob}
                    />
                    <label> Comments Second Job: </label>
                    <input
                        type="text"
                        onChange={this.handleCommentsSecondJobChange}
                        name="commentsSecondJob"
                        value={this.state.commentsSecondJob}
                    />
                    <label> Employee ID: </label>
                    <input
                        type="text"
                        onChange={this.handleEmployeeChange}
                        name="employee_id"
                        value={this.state.employee_id}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default AddJob;