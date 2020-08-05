import React, { Component } from "react";
import characters from "../characters.json";
import Character from "./Character";
import "./style.css";

class Game extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    topScore: 0,
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

  handleClick = (id) => {
    // Shuffle and store the array of characters that's currently in state
    var shuffledArray = this.shuffle(this.state.characters);

    // Set the array in state to the shuffled array
    this.setState({ characters: shuffledArray });

    // If the clicked character has already been clicked...
    if (this.state.clickedCharacters.includes(id)) {
      // TODO: Display this console log to the user on the page
      console.log("Incorrect guess!");

      // Grab the current top score from state
      var topScore = this.state.topScore;

      // If the current score is greater than the current top score...
      if (this.state.score > topScore) {
        // Set the current score as the top score
        topScore = this.state.score;
      }

      // Empty clickedCharacters array, set top score as final score, set current score to 0
      this.setState({
        clickedCharacters: [],
        topScore,
        score: 0,
      });

      // If the clicked character was never clicked...
    } else {
      // TODO: Display this console log to the user on the page
      console.log("Correct guess!");

      // Increment the score
      var newScore = this.state.score;
      newScore = newScore += 1;
      this.setState({ score: newScore });

      // Add the character to the clickedCharacters array
      var clickedArray = this.state.clickedCharacters;
      clickedArray.push(id);
      this.setState({ clickedCharacters: clickedArray });
    }
  };

  render() {
    return (
      <div>
        <div>
          <span>
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </span>
        </div>

        {/* Create a new array of Character components using data from characters.json */}
        {/* Display the array on the page using JSX */}
        {/* Execute the handleClick function when Character component is clicked */}
        <div className="grid">
          {this.state.characters.map((character) => (
            <Character
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))}
        </div>

        {/* TODO:
              - (DONE) Randomize on click
                  - Create array that holds all the characters
                  - When any character is clicked, randomize array and place back on the page
              
              - (DONE) Scoring
                  - Create an array to store clicked characters
                  - Each time a character is clicked, check if character is already in the clicked characters array:
                      - IF YES:
                          - Tell user they guessed incorrectly
                          - If score > top score, store score as top score 
                          - Set score to 0
                          - Clear clicked characters array
                      - IF NO:
                          - Increment score
                          - Add character to clicked characters array */}
      </div>
    );
  }
}

export default Game;
