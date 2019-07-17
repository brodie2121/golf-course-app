import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AddJob from './components/addJobs';
import JobBoardList from './components/jobBoardList';
import NavBar from './NavBar/NavBar';
import AddEmployee from './components/addEmployee';
import EmployeeHome from './components/employeeHome';
import JobBoardDate from './components/jobBoardDate';
import AddSpraychart from './components/addSprayChart';
import SpraychartHome from './components/sprayChartHome';
import Jobs from './components/jobs';
import Employees from './components/employee';

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route path="/dailyjobboard/all" exact component={JobBoardList} />
      <Route path="/dailyjobboard/post/add" exact component={AddJob} />
      <Route path="/jobs/:job_id?" component={Jobs} />
      <Route path="/employee/all" component={EmployeeHome} />
      <Route path="/employee/:employee_id?" component={Employees} />
      <Route path="/employee/post/add" exact component={AddEmployee} />
      <Route path="/spraychart/post/add" exact component={AddSpraychart} />
      <Route path="/spraychart/all" exact component={SpraychartHome} />

    </Router>
  );
}

export default App;
