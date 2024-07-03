import React from "react";
import { useParams } from "react-router-dom";
function ProductDetails(){
    const URL_PARAMS = useParams();
    console.log(URL_PARAMS)
    return(
        <div>Product Details</div>
    )

}
export default ProductDetails;