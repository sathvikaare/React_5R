import { useEffect, useState } from "react";

const addProfileHoc=(WrapprdComponent)=>{
    return (props)=>{
        const [data,setData]=useState({})
        useEffect(()=>{
            const data={
                name:"Vidya",
                salary:"5LPA",
            };
            setData(data)
        },[])
        return <WrapprdComponent data={data} {...props} />
    }

}
export default addProfileHoc;