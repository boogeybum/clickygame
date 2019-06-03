import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm headbar">
          <h3>Clicky Game</h3>
        </div>
        <div className="col-sm headbar">
          <h3>Click an image to begin!</h3>
        </div>
        <div className="col-sm headbar">
          <h3>Score: 0 | Top Score: 0</h3>
        </div>
      </div>
    </div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
    </>
  );
}

export default App;
