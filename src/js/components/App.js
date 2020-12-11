import { hot } from 'react-hot-loader';
import React from 'react';
import '../../scss/main.scss'
import Counter from './testCounter/counter.jsx';
import Lion from '../../assets/images/LionPuzzle.jpg'
const App = () =>{
  return(
    <div>
      <h1>HELLO MAMA HOW ARE YOU?</h1>
      <div className={'img__container'}>
        <img src={Lion} alt="Immagine" />
      </div>
      <Counter />
    </div>
  )
}

export default hot(module)(App);