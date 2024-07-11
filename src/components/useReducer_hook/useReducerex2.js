import React, { useReducer } from 'react'
import { initialState,reducer} from './jsFunctionFile'

const UseReducerex2 = () => {
    const [currentState,dispatch]=useReducer(reducer,initialState)
  const addTodoFunction=()=>{
    dispatch({
      type:"ADD_TODO",
      newTodo:"eat breakfast at 10am",

    })
  }
  const deleteTodo=()=>{
    dispatch({
      type:"DELETE_TODO",
    })
  }
    return (
    <div><button onClick={addTodoFunction}>Add Todo</button>
      {currentState.todos.map((eachTodo)=>(<h2>{eachTodo}<button onClick={deleteTodo}>Delete</button></h2>

    ))}
    </div>
  )
}
export default UseReducerex2

