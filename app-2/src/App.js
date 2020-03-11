import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      drinks: ["tea", "coffee", "water", "juice", "smoothie"]
    };
  }

  render() {
    let showDrinks = this.state.drinks.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{showDrinks}</div>;
  }
}

export default App;
