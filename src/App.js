import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AddJob from './components/addJobs';
function App() {
  return (
    <Router>
      <Route path="/" exact component={AddJob} />
    </Router>
  );
}

export default App;
