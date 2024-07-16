
import React from "react";
import useCounter from "./useCounter";
function CounterExample(){
    const [count,incrementCount,decrementCount,resetCount]=useCounter(10,5);
    const [age,incrementAge,decrementAge,resetAge]=useCounter(0,1);
    const [salary,incrementSalary]=useCounter(80000,1500);
    return(
        <div>
            <h2>{count}</h2>
            
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
            <button onClick={resetCount}>Reset Count</button>
            <h2>{age}</h2>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>
            <button onClick={resetAge}>Reset Age</button>
            <h2>{salary}</h2>
            <button onClick={incrementSalary}>Increment Salary</button>
        </div>
    )

}
export default CounterExample;