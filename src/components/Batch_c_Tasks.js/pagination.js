import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

const PaginationCom= () => {
    const [userDetails,setUserDetails]=useState([]);
    const [currentpage,setCurrentpage]=useState(1);
    const usersPerPage=3;
    
    const fetchData=async ()=>{
      try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserDetails(response.data)
        console.log(response.data)
      }catch(error){
        console("something went wrong")
      }
    }

    useEffect(()=>{
      fetchData();
    },[]);
    const lastIndex=currentpage*usersPerPage;
    const firstIndex=lastIndex-usersPerPage;
    const currentusers=userDetails.slice(firstIndex,lastIndex)

    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(userDetails.length/usersPerPage);i++){
        pageNumbers.push(i);
    }
    const paginate = (pageNumber) => setCurrentpage(pageNumber);
  return (
    <div>
   
        {currentusers.map((each)=><div style={{border:"2px solid black"}}>
        <h3>Name : {each.name}</h3>
        <h3>EmailId : </h3>{each.email}
        <h3>Mobile  : </h3>{each.phone}
        <h3>Website : </h3>{each.website}
        <h3>Address : </h3>{each.address.steet},{each.address.city}
        </div>)}
        {pageNumbers.map((pageNumber)=><button onClick={()=>paginate(pageNumber)}>{pageNumber}</button>)}
    </div>
  )
}
export default PaginationCom;