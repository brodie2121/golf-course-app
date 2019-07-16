import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AddJob from './components/addJobs';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route path="/" exact component={AddJob} />
    </Router>
  );
}

export default App;
