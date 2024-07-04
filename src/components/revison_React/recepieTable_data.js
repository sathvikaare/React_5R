
import React, { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "./tableCompo";

function RecepieTable(){

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("use effect executing...");
        //perform side effects
        fetchData();
    },[]);
    
    const fetchData = async () => {
        try {
            const response1 = await axios.get("https://dummyjson.com/recipes");
            console.log(response1, "response1");
            if (response1.status === 200) {
                setData(response1.data.recipes);
            }
        } catch (err) {
            console.error(err);
        }
    };
    return(
        <div>
            {console.log("dataaa",data)}
            {data.length > 0 ? 
           <TableComponent data={data}/>:"loadingg...." }
        </div>
    )

}
export default RecepieTable;