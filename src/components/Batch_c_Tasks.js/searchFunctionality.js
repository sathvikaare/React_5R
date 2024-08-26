import React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const SearchUser = () => {
    const [userDetails,setUserDetails]=useState([]);
    const [searchValue,setSearchValue]=useState("")
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
    },[])
    const inputHandler = e=>{
        setSearchValue(e.target.value);
        console.log(e.target.value)
    }

    const filteredUsersBySearch = userDetails.filter(user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    
   
  return (
    <div>
        <input type='text' placeholder='Enter User Name' value={searchValue} onChange={inputHandler}/>
        {filteredUsersBySearch.map((each)=><div style={{border:"2px solid black"}}><h3>Name : {each.name}</h3>
        <h3>EmailId : </h3>{each.email}
        <h3>Mobile  : </h3>{each.phone}
        <h3>Website : </h3>{each.website}
        <h3>Address : </h3>{each.address.steet},{each.address.city}
        </div>)}
    </div>
  )
}
export default SearchUser;