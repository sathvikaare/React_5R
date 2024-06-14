// import { Form } from "./form/form";
// import { Listitems } from "./list";

// const ArrayList = ()=>{
//     return(
//         <>
//         {[1,2,3,4,5].map((e)=>{
//            return(
//             <>
//            <li>{e}</li>

//   </>
//            );
//         })}
        
//         </>
//     )

// }
const ArrayList=()=>{
    return(
        <>
        {["Name:sathvika","branch:cse","rollno:19WJ1A0526"].map((num)=>{
            return(
                <>
                <li>{num}</li>
                </>
            )
        })}
        </>
    )
}
export default ArrayList;