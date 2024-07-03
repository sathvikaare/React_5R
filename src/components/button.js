 export const Btn=(prop)=>{
    const { text,bgcolor,onpress,width=100,height=40}=prop
    return(
        <button onClick={onpress} 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded">
            {text}</button>
    )
}
// import { Component } from "react";
// export class Btn extends Component{
//     render(){
//         return(
//             <>
//             <button>Add to Cart</button>
//             </>
//         )
//     }
// }
