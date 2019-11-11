import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
  return (


    <header className="scoreB">
     
      <div className="row">
        <h1>Clicky Game</h1>
        </div>


        <div className="row">
      <div className="col-md-12 col-ctr">
      <h2>Click each bird only once to gather scores or to beat the highest score!</h2>
      </div>
      </div>

      <div className="row">
        <p>(Game over if you click an image twice!)</p>
      </div>

      
        <div className="row">
            <div className="score"><h6>Current Score: {props.score}</h6></div>
            <div className="score"><h6>High Score: {props.topScore}</h6></div>
          
        </div>

        
        
    </header>
  );
}
export default Scoreboard;