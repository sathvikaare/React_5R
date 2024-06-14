import { Listitems } from "./list";
import { Headings } from "./heading";
import { Img } from "./image";
import { Btn } from "./button";
import ArrayList from "./arrayListBraces";
export const Card=()=>{
    return(
        <>
        <center>
        <div style={{border:"1px solid black",width:"250px",borderRadius:"10px",backgroundColor:"whitesmoke"}}>
        <Headings/>
        <Img/>
        <ArrayList/>

        <Listitems/>
        <Btn/>
        </div>
        </center><br></br>
        </>
    )
 }