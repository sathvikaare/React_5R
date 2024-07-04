// import React, { useEffect, useState } from "react";
// import axios from "axios";
// function UseEffectExample1(){
//     const [data,setData]=useState([]);

//     useEffect(()=>{
//         console.log("use effect executing...")
//         fetchData();
//         //perform side effectspro
//     },[]);
//     const fetchData=async ()=>{
//         try {
//             const response1=await axios.get("https://fakestoreapi.com/products");
//             console.log(response1,"response1");
//             if(response1.status===200){
//                 setData(response1.data);

//         }
//         }
//         catch (err){    
//         }
//         finally{ 
//         }
//     };
//     return(
//         <div>
//             {data.length>0 && <>
//             {
//                 data.map(each=>{
//                     return(
//                         <>
//                         <h3>{each.title}</h3>
//                         </>)
//                 })
//             }
//             </>}
//         </div>
//     )
// }
// export default UseEffectExample1;
import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectExample1() {
    const [data, setData] = useState([]);
    const [count1,setCount1]=useState(0);


    useEffect(() => {
        console.log("use effect executing...");
        //perform side effects
        fetchData();
    },[] );
    const countHandler1=()=>{
        setCount1(count1+1);
    }

    const fetchData = async () => {
        try {
            const response1 = await axios.get("https://fakestoreapi.com/products");
            console.log(response1, "response1");
            if (response1.status === 200) {
                setData(response1.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
                <h2>Count 1: {count1}</h2>
                <button onClick={countHandler1}>Increase Count1</button>
            {data.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap"}}>
                    {data.map((each, index) => (
                        <div key={each.id} style={{
                            flex: "0 0 30%",
                            margin: "20px",
                            border: "2px solid #ccc",
                            borderRadius: "5px",
                            justifyContent:"space-evenly",
                            padding: "10px",
                            boxSizing: "border-box",
                            height:"500px"
                        }}>
                            <h3>{each.title}</h3>
                            <img src={each.image} alt={each.title} style={{ width: "100%", height:"50%"}} />
                            <p>{each.description}</p>
                            <p>Category: {each.category}</p>
                            <p>Price: ${each.price}</p>
                            <p>Rating: {each.rating.rate} ({each.rating.count} reviews)</p>
                        </div>
                    ))}
                </div>
            ):
            <>loading...</>}
        </div>
    );
}

export default UseEffectExample1;