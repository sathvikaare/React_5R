import React, { useState } from 'react'


// function ExampleArrays() {
//     const [items, setItems] = useState([])
//      const addItem = ()=>{
//         console.log("clicked")
//         setItems([...items,{
//             id:items.length,
//             value:Math.floor(Math.random()*10)
//         }])
//      }
//     return (
//         <div>
//             <button onClick={addItem}>Add item</button>
//             <ul>
//                 {items.map(item => (
//                     <li key={item.id}>{item.value}</li>
//                 ))}
//             </ul>

//         </div>
//     )
// }
function ExampleArrays(){
    const [items,setitems] =useState([])
    const additems=()=>{
        setitems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10) 
       }])
    }
    return (
        <div>
            <button onClick={additems}>Add Randum list items</button>
            <ul>
                {items.map(item=>(
                    <>
                    {item.id}

                    <li key={item.id}>{item.value}</li>
                    </>)
                )}
            </ul>

        </div>
    )
}
export default ExampleArrays