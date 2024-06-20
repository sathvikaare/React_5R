 export const Btn=(prop)=>{
    const { text,bgcolor,onpress,width,height}=prop
    return(
        <button onClick={onpress} style={{backgroundcolor:bgcolor,width:width,height:height}}>{text}</button>
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
