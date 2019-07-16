import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddJobs from './addJobs';

class JobBoardList extends Component {
    state = {
        jobs: []
    };

    async componentDidMount() {
        const jobs = await this.load();
        console.log("jobs", jobs)
        this.setState({
            jobs
        });
    }

    loadData = async () => {
        const url = "http://localhost:3000/dailyjobboard/all";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };


}