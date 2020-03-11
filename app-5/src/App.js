import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image'

class App extends Component{
  render(){
    return(
      <div>
        <Image url = {'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4XXvRR68B7BGWFloTqfLAA9UbHZOycoYFJs5A-CSTQZBItLVf'} />
      </div>
    )
  }
}


export default App;
