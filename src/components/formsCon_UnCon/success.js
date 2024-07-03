import React from "react";
function SuccessScreen(props){
    const {data}=props;
    return(
        <div>
        <h3>Welcome {data.username}</h3>

    </div>
    )
};
export default SuccessScreen;