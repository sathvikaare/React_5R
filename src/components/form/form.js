export const Form=()=>{
    return(
        <div><center>
            <form style={{border:"1px solid black",backgroundColor:"whitesmoke", width:"500px",textAlign:"center",borderRadius:"5px"}}>
                <h1>Student Details</h1>                
                <label for="name">Name:</label>
                <input type="text" id="name"/>
                <br/><br/>
                <label for="roll">Roll:</label>
                <input type="text" id="roll"/>
                <br/><br/>
                <label for="branch">Branch:</label>
                <input type="text" id="branch"/>
                <br/><br/>
                <label for="clgname">College Name:</label>
                <input type="text" id="clgname"/>
                <br/><br/>
                <label for="mobile">Mobile:</label>
                <input type="text" id="mobile"/>
                <br/><br/>
                <label for="email">Email:</label>
                <input type="email" id="email"/>
                <br/><br/>
            </form></center>
        </div>
    )
}