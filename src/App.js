import React from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
    {/* navbar location that includes the game reset link to the title, and the score that updates with each click and shows the high score */}
    <Nav
      title="Clicky Game"
      // Need links to logic that will update score with each click, high score
      score="0"
      topScore="0"
      rightWrong="right wrong alert"
    />
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
