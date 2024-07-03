import React, { useState } from 'react'

// function Counter1() {
//     const initialCount = 0
//     const [count,setCount]=useState(initialCount)
//     const add = ()=>{
//         setCount(prev=>prev+1)
//         setCount(prev=>prev+1)
//     }
//     const sub = ()=>{
//         setCount(prev=>prev-1)
//         setCount(prev=>prev-1)
//     }
//   return (
//     <div>
        
//       <p>{count}</p>
//       <button onClick={add}>add</button>
//       <button onClick={sub}>sub</button>
//       <button onClick={()=>setCount(initialCount)}>Reset</button>
//     </div>
//   )
// }

// export default Counter1
function Counter1(){
  const initialcount=0
  const [count,setcount]=useState(initialcount)
  const add =()=>{
    setcount(count=>count+1)
    setcount(count=>count+1)
  }
  const sub =()=>{
    setcount(count=>count-1)
    setcount(count=>count-1)
  }
  return(
    <div>
      <p>{count}</p>
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
      <button onClick={()=>setcount(initialcount)}>reset</button>
    </div>

  )

}
export default Counter1;

