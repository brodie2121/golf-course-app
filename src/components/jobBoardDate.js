import React, { Component } from "react";

class JobBoardDate extends Component {
    state = {
        date: [] 
    }

async componentDidMount() {
    const date = await this.loadData();
    this.setState({
        date
    });
}

    loadData = async () => {
        const posting_date = this.props.match.params.posting_date;
        const url = `http://localhost:3000/dailyjobboard/jobs/${posting_date}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    render() {
        const { job } = this.state;
        return (
            <div>
                <h2>{job.posting_date}</h2>
                <p>{job.firstname}</p>
                <p>{job.lastname}</p>
                <p>{job.phonenumber}</p>
                <p>{job.email}</p>
                <p>{job.experience}</p>
                <p>{job.datestarted}</p>
            </div>
        );
    }
}

export default JobBoardDate;