import React, {useEffect, useState } from "react";
function UseEffectExample2(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
     useEffect(()=>{
        console.log("useeffect executing....");
        document.title=`react count ${count1}`
    },);//count1 count2 not declared=acts as componentdidmount, execute once
    const countHandler1=()=>{
        setCount1(count1+1);
    }
    const countHandler2=()=>{
        setCount2(count2+1);
    }


    return(
        <div>
            <h2>Count 1: {count1}</h2>
            <button onClick={countHandler1}>Increase Count1</button>

            <h2>Count 2: {count2}</h2>
            <button onClick={countHandler2}>Increase Count2</button>
        </div>
    )
}
export default UseEffectExample2;