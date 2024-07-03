import { Component } from "react";
import CardExample from "../cards/cards";


 export class ButtonComp extends Component{
    state={text1:"Subscribe",
        text2:"Subscribed",
        issubscribe:false
    };
    subscribeHandler=()=>{
        this.setState({
            issubscribe:!this.state.issubscribe
        })

    }
    render(){
        return(
            <>
            <button onClick={this.subscribeHandler}>
                {this.state.issubscribe?this.state.text2:this.state.text1}
            </button>
            {
            this.state.issubscribe?
            <>
            <h1> enjoy your premium</h1>
            <CardExample/>
            </>
            :
            <h1>Need to subscribe to get premium</h1>
            }
            </>

        )
    }
}