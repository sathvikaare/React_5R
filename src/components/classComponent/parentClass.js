import React, { Component } from 'react'
import ChildClassEx from './childClass';

class ParentClassEx extends Component {
    state={
        name:"sathvika",
        count:5,
    }
  render() {
    return (
      <div>
      <ChildClassEx mystate={this.state}/>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>clickme</button>
      </div>
    )
  }
}
export default ParentClassEx;