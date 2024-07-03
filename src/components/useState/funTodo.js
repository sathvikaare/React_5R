import React, { useState } from 'react'

function FunTodo() {
      const daytask = [{id:1,part:"mrng",tasks:["weakup 7","bearkfast 8"]},{id:2,part:"afternoon",tasks:["lunch 1","class 3 "]}] 
      
     const [task,setTask]= useState(daytask)

     const taskHandler = ()=>{
      const newtask={id:3,part:"evening",tasks:["scrolling insta 6pm","whatsapp 7pm"]}
      // const updatetask = task.find((eachtask)=>eachtask.id===newtask.id)
      // console.log(dummyIncluded)

      setTask(()=>[...task,newtask])
      // if(!updatetask){
      //   setTask(()=>[...task,newtask])
      // }

      // 

      // )
     }
    
     const deleteHandler=(i)=>{

      const filterData = task.filter((e,ind)=>ind!==i)
      setTask(filterData)
    }
     
     
     
  return (
    <div>
      <h1>hello world</h1>
      {task.map((e,i)=>{

        return <>
        <h2 key={i}>{e.part}</h2>
        {/* {e.tasks.map((etask)=>{
          return <>
          <p>{etask}</p>
          </>
        })} */}
      {/* <button onClick={updateHandler}>update</button> */}
      <button onClick={()=>{deleteHandler(i);}}>delete</button>
        </>
        
      })}
<p></p>
      <button onClick={taskHandler}>Add task</button>
                    
    </div>
  )
}

export default FunTodo