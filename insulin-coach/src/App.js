import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css'; // Create this CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            {/* Add more routes here for different pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
