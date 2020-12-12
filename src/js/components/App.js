import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import '../../scss/main.scss'
import Counter from './testCounter/counter.jsx';
import Lion from '../../assets/images/LionPuzzle.jpg'
import { container } from '../constants/constants'

class App extends Component {
constructor(props) {
  super(props);
  this.state={
    greeting:'CIAOOO'
  }
}
render(){
    const { greeting } = this.state
  return(
    <div>
      <h1>HELLO MAMA HOW ARE YOU?</h1>
      <div className={ container.IMAGE }>
        <img src={Lion} alt="Immagine" />
      </div>
      <Counter greeting={greeting}/>
    </div>
  )
}
}

export default hot(module)(App);