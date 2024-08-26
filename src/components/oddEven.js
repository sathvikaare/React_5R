import React, { useState } from 'react'

const OddEven = () => {
  const  [count,setCount]=useState("")
  const countHandler=()=>{
    setCount(count+1)
  }
  const iseven=()=>{
    return count%2===0
  }
  return (
    <div>
        <button onChange={countHandler}>{count}</button>
        <span>{iseven?"even":"odd"}</span>
    </div>
  )
}
export default OddEven;