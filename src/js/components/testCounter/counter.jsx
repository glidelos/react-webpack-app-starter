import React, {Component} from 'react';

export default class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  upCounter =() =>{
    const { count } = this.state
    this.setState({
      count: count+1
    })
  }
  render() {
    const { count } = this.state
    return (
      <div style={{border: '1px solid red'}}>
        <h1>
          {count}
        </h1>
        <button onClick={this.upCounter}>AUMENTA DI 1</button>
      </div>

    )
  }
}