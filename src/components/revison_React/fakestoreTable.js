import React, { useEffect, useState } from 'react';
import axios from 'axios';
const FakeStoreFetch = () => {
  const [fakeData,setCatData]=useState([]);
  const fetchData=async ()=>{
    try{
      const response=await axios.get("https://fakestoreapi.com/products");
      setCatData(response.data)
      console.log(response.data)
     
    }catch(error){
      console("something went wrong")
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
  <table>
    <tr>
        <th>S.no</th>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th> 

        
    </tr>
   
    {fakeData.map((each)=> <tr>
            <td>{each.id}</td>
            <td>{each.image}</td>
            <td><img src={each.image} alt={each.title} width={100}/></td>
            <td>{each.price}</td>
        </tr>)}
   
  </table>
  )
}

export default FakeStoreFetch;
//no need extra json conversion step and  it uses data property
//