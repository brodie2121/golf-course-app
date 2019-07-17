import React, { Component } from "react";

class Jobs extends Component {
    state = {
        job: [] 
    }

async componentDidMount() {
    const job = await this.loadData();
    this.setState({
        job
    });
}

    loadData = async () => {
        const jobId = this.props.match.params.job_id;
        const url = `http://localhost:3000/dailyjobboard/jobs/${jobId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    render() {
        const { job } = this.state;
        return (
            <div>
                <h2>{job.posting_date}</h2>
                <p>{job.firstjob}</p>
                <p>{job.commentsfirstjob}</p>
                <p>{job.secondjob}</p>
                <p>{job.commentssecondjob}</p>
                <p>{job.employee_id}</p>
            </div>
        );
    }
}

export default Jobs;