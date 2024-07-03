import { Component } from "react";

class TodoComponent extends Component{
    state={
        todos:[],
    };
    render(){
        return(
        <>
        {this.state.todos.map((eachtodo)=>{
            return <h2>{eachtodo}</h2>
        })}

        </>
        )
    }
}
export default TodoComponent;