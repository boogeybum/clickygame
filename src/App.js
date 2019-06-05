import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import './App.css';

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
};

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.setState.clicked.concat(id) })
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore > this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You Win!" })
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Giggity",
      clicked: []
    });
    this.handleShuffle();
  };
  
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends : shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
    {/* navbar location that includes the game reset link to the title, and the score that updates with each click and shows the high score */}
    <Nav
      title="Family Guy Clicky Game"
      // Need links to logic that will update score with each click, high score
      score={this.state.currentScore}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}
    />

    <Title>
        Click on an image to earn points, but don't click on any more than once!
    </Title>


    {/* display all friends pictures */}
    <div className="container">
      <div className="row">
        {this.state.friends.map(friend => (
          <div className="col-md-3 col-sm-6">
            <FriendCard
              key={friend.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={friend.id}
              image={friend.image}
              />
          </div>
        ))}
      </div>
    </div>
    </Wrapper>
    );
  }
}

export default App;
