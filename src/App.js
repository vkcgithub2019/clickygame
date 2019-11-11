import React, { Component } from "react";
import pictures from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

// the shuffling of pictures once clicked
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedpictures: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a let to be updated
    let clickedpictures = this.state.clickedpictures;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed pictures
    if (clickedpictures.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedpictures.push(id);
      console.log(clickedpictures);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 18) {
      /* console.log ("you win") */
      // tell player he has achieved the highest score
      // reset score to zero
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedpictures: []
      });
    } else {
       // alert player loss
      this.setState({
        score: 0,
        clickedpictures: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ pictures: shuffle(pictures) });
  };

  render() {
    return (
      <div className="container">
        

        
        <Scoreboard
          title="clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div
          className="alert"
          style={{ opacity: this.state.showAlert }}>
        
          You already clicked that, Game over! 
          </div>

        <div className="row">
          {this.state.pictures.map(picture => (
            <Card
              id={picture.id}
              image={picture.image} 
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;