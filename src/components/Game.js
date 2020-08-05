import React, { Component } from "react";
import characters from "../characters.json";
import Character from "./Character";

class Game extends Component {
  state = {
    characters,
  };

  // Use the Fisher-Yates (aka Knuth) Shuffle to randomize an array
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleClick = () => {
    console.log("Character clicked!");

    // Shuffle and store the array of characters that's currently in state
    var newArray = this.shuffle(this.state.characters);
    console.log("Shuffled array: ", newArray);

    // Set the array in state to the shuffled array
    this.setState({ characters: newArray });
  };

  render() {
    return (
      <div>
        {/* Create a new array of Character components using data from characters.json */}
        {/* Display the array on the page using JSX */}
        {/* Execute the handleClick function when Character component is clicked */}
        {this.state.characters.map((character) => (
          <Character
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleClick={this.handleClick}
          />
        ))}

        {/* TODO:
              - Create array that holds all the characters
              - When any character is clicked, randomize array and place back on the page */}
      </div>
    );
  }
}

export default Game;
