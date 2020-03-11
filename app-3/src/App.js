import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      filterString: '',
      drinks: ["tea", "coffee", "water", "juice", "smoothie"]
    }
  }
handleChange(filter){
    this.setState({filterString: filter})
  }

  render(){
    let showDrinks = this.state.drinks
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return(
      <div>
        <input onChange= {e => this.handleChange(e.target.value)} />{showDrinks}

      </div>
    )
  }
}

export default App;
