import React, { createContext } from 'react'
import Myform from './Myform'

export const myContext=createContext()

const TheContext = () => {
  const [mydata,setMydata]=React.useState([])

  const addTask=(task)=>{
    setMydata(prevdata=>[...prevdata,task])
  } 



  return (
    <myContext.Provider value={{mydata,addTask}}>
     <Myform/>
    </myContext.Provider>
  )
}

export default TheContext