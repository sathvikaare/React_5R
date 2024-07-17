import React, { useState } from 'react'
import Head from './reactMemoHead';

const ReactMemoEx = () => {
    const [value,setValue]=useState(0);
    const submitHandler=()=>{
        setValue(value+1);
    }
  return (
    <div>
        <Head data="sathvika"/>
        <h1>{value}</h1>
        <button onClick={submitHandler}>clickme</button>
    </div>
  )
}
export default ReactMemoEx;
