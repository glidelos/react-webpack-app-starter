import React, {Component} from 'react';
import * as PropsType from 'prop-types';

export default class Counter extends Component{
  static propTypes = {
    greeting: PropsType.string
  }
  constructor(props) {
    super(props);
    this.state = {
      count:0,
    }
  }
  upCounter =() =>{
    const { count } = this.state
    this.setState({
      count: count+1,
    })
  }
  render() {
    const { count }=this.state
    const { greeting } = this.props
    return (
      <div style={{border: '1px solid red'}}>
        <h1>
          {count}
          <span>
           {greeting}
          </span>
        </h1>

        <button onClick={this.upCounter}>AUMENTA DI 1</button>
      </div>

    )
  }
}