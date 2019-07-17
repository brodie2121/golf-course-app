import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AddJob from './components/addJobs';
import JobBoardList from './components/jobBoardList';
import NavBar from './NavBar/NavBar';
import AddEmployee from './components/addEmployee';
import EmployeeHome from './components/employeeHome';
import JobBoardDate from './components/jobBoardDate';

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route path="/dailyjobboard/all" exact component={JobBoardList} />
      <Route path="/dailyjobboard/post/add" exact component={AddJob} />
      <Route path="/employee/all" component={EmployeeHome} />
      <Route path="/employee/post/add" exact component={AddEmployee} />
    </Router>
  );
}

export default App;
