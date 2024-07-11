import React, { useContext, useState } from 'react'
import { myContext } from './TheContext'

const Myform = () => {
 const shareddata = useContext(myContext)
 console.log(shareddata)
    const [data,setData]=useState("")
const inputHandler=(e)=>{
    setData(e.target.value)
    // console.log(e.target.value)
}
const submitHandler=(e)=>{
  e.preventDefault()
  // console.log(data) 
  shareddata.addTask(data)  
}

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={inputHandler}/>
            <input type='submit'/>
        </form>
        {shareddata.mydata.map((item)=>{
          return <div>
            <p>{item}</p>
          </div>
        })}
    </div>
  )
}
export default Myform;


//context API
//1.creation => createContext( )
//2.provider
//3.useContext()

