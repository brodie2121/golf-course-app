import React, { Component } from "react";

class SprayCharts extends Component {
    state = {
        spraychart: [] 
    }

async componentDidMount() {
    const spraychart = await this.loadData();
    this.setState({
        spraychart
    });
}

    loadData = async () => {
        const spraychartId = this.props.match.params.spraychart_id;
        const url = `http://localhost:3000/spraychart/spraycharts/${spraychartId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    render() {
        const { spraychart } = this.state;
        return (
            <div>
                <h2>{spraychart.dateapplied}</h2>
                <p>{spraychart.id}</p>
                <p>{spraychart.employee_id}</p>
                <p>{spraychart.holestreated}</p>
                <p>{spraychart.lengthofcuttreated}</p>
                <p>{spraychart.chemicalsbeingused}</p>
                <p>{spraychart.rateapplied}</p>
                <p>{spraychart.totalgallons}</p>
                <p>{spraychart.sprayrig}</p>
                <p>{spraychart.pestordiseasecontrolled}</p>
            </div>
        );
    }
}

export default SprayCharts;