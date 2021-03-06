import React from "react";
import PictureCard from "./components/PictureCard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";

let clickedArray = [];

class App extends React.Component {
  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  state = {
    pictures: this.shuffle(pictures),
    score: 0,
    highScore: 0,
    result: "Click an image to begin!"
  };

  clickedPicture = id => {
    if (clickedArray.indexOf(id) === -1){
      clickedArray.push(id);
      this.setState({pictures: this.shuffle(this.state.pictures)});
      this.setState({score: this.state.score + 1}, () => {
        if (this.state.highScore < this.state.score){
          this.setState({highScore: this.state.score});
        };
        if (this.state.score === pictures.length){
          this.setState({result: "You Won!"});
          this.setState({score: 0});
          clickedArray = [];
        } else {
          this.setState({result: "Correct!"});
        };
      });
    } else {
      this.setState({result: "Incorrect!"});
      this.setState({score: 0});
      clickedArray = [];
    };
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          result={this.state.result}
          highScore={this.state.highScore}
        />
        <Header />
        <Wrapper>
          {this.state.pictures.map(item => (
          <PictureCard
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            clicked={this.clickedPicture}
          />
          ))}
        </Wrapper>
      </div>
    );
  };

}

export default App;