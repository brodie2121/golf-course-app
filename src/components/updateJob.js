import React, { Component } from "react";

class UpdateJob extends Component {
  state = {
    posting_date: "",
    firstJob: "",
    commentsFirstJob: "",
    secondJob: "",
    commentsSecondJob : "",
    employee_id: ""
  };

  async componentDidMount() {
    const job = await this.loadData();
    console.log(job);
    this.setState({
        posting_date: job.posting_date,
        firstJob: job.firstjob,
        commentsFirstJob: job.commentsfirstjob,
        secondJob: job.secondjob,
        commentsSecondJob: job.commentssecondjob,
        employee_id: job.employee_id
    });
  }

    loadData = async () => {
        const dailyjobboardId = this.props.match.params.dailyjobboard_id;
        const url = `http://localhost:3000/dailyjobboard/jobs/${dailyjobboardId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
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

  handleSubmit = e => {
    e.preventDefault();
    const dailyjobboardId = this.props.match.params.dailyjobboard_id;
    const posting_date = this.state.posting_date;
    const firstJob = this.state.firstJob;
    const commentsFirstJob = this.state.commentsFirstJob;
    const secondJob = this.state.secondJob;
    const commentsSecondJob = this.state.commentsSecondJob;
    const employee_id = this.state.employee_id;
    const data = { posting_date, firstJob, commentsFirstJob, secondJob, commentsSecondJob, employee_id };
    const url = `http://localhost:3000/dailyjobboard/jobs/update/${dailyjobboardId}`;
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
        <h2>{this.state.dailyjobboardId}</h2>
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

export default UpdateJob;