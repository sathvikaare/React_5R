import { Component } from "react";

class MountingPhase extends Component{
    constructor(){
        console.log("constructor exec");
        super();
        this.state={
            count:10,
            favouritecolor:"green"
        };
    }
    componentDidMount(){
        console.log("componentDidmount exec");
        document.title=`react count ${this.state.count}`;
    }

    static getDerivedStateFromProps(props,state){
        return{favouritecolor: props.favcolor};
    }
    increaseCount=()=>{
        this.setState({
            count:this.state.count+1,
        });
    };
    componentDidUpdate=()=>{
        document.title=`react count ${this.state.count}`;
    };
    shouldComponentUpdate(){//by default true ,if false it restrict executn
        return true;
    }
    getSnapshotBeforeUpdate(state,prop){
        console.log(state,prop);
        return null;

    }

    

    render(){
        console.log("render exec");
        return(
            <><h3>Myfovourite color is {this.state.favouritecolor}  {this.state.count}</h3>
            <button onClick={this.increaseCount}> click to increse count</button></>
        )
    }
}
export default MountingPhase;