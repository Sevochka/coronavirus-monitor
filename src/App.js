import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="app-container">
        <Main/>
      </div>
    </div>
  );
}

export default App;
