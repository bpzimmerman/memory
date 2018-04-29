import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div id="head-wrap" className= "clearfix">
    <div className="head-content clearfix headline">
      <h1>Memory Game</h1>
      <p className="guess">{props.result}</p>
      <div className="page-nav">
        <p className="score">Score: {props.score}</p>
        <p>High Score: {props.highScore}</p>
      </div>
    </div>
  </div>
);

export default Navbar;