import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import '../../scss/main.scss'
import Counter from './testCounter/counter.jsx';
import Lion from '../../assets/images/LionPuzzle.jpg'
import { container } from '../../js/constants/constants'
class App extends Component {
render(){
  return(
    <div>
      <h1>HELLO MAMA HOW ARE YOU?</h1>
      <div className={ container.IMAGE }>
        <img src={Lion} alt="Immagine" />
      </div>
      <Counter />
    </div>
  )
}
}

export default hot(module)(App);