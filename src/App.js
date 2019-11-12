import React, { Component } from "react";
import pictures from "./pads.json";
import ScoreKeeper from "./components/ScoreKeeper";
import Pad from "./components/Pad/pad";

// the random shuffling of pictures once clicked
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
    // updating the state of score
    let clickedpictures = this.state.clickedpictures;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // selecting id of indexed picture
    if (clickedpictures.indexOf(id) === -1) {
      // pushing and storing that id of the clicked picture
      clickedpictures.push(id);
      console.log(clickedpictures);
      // executing the score function
      this.handleIncrement();
      // trigerring the reshuffling function
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
       // player lost and resetting to zero
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

  // increment score by 1
  handleIncrement = () => {
    // updating the component state
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ pictures: shuffle(pictures) });
  };

  render() {
    return (
      <div className="container">
        <ScoreKeeper
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
            <Pad
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