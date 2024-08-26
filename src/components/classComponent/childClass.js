import React, { Component } from 'react'

class ChildClassEx extends Component {
    constructor(props){
        console.log("constructor executed",props)
        
        super(props);
            this.state={
                value:5
                }
    }

    static getDerivedStateFromProps(props,state){
        console.log(props);
        return{value:props.mystate.count+state.value};
    };
  
    componentDidMount(){
        console.log("compopnentDidMount");
    }

  render()
  {
    console.log("renderexecuted") 
    return (
      <div>
        {this.props.mystate.count};
        {this.state.value}
      </div>
    )
  }
}
export default ChildClassEx;





