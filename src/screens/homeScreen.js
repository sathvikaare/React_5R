import React from "react";
import {useState} from "react"
import NavBar from "../components/navBar/navbar";
import { Btn } from "../components/button";
import { Link } from "react-router-dom";
import axios from "axios"
function HomeScreen(){
  const [data,setData]= useState([]);
  const fetchData=async () =>{
    const response = await axios.get("https://fakestoreapi.com/products");
    if(response.status===200){
      setData(response.data);
    }
  }

    return(
        <div>
          <NavBar/>
          <h2>welcome to  Home screen</h2>
          {/* {
            [1,2,3,4].map((each)=>{
              return(<Link to={`/hyderabad/${each}/info`}>
                <Btn text={each}/>
                </Link>
              )
            })
          } */}
          <button onClick={fetchData}>Fetch Data</button>
          {
            data.length>0?(
              <>{
              data.map((each)=>{
                return(<Link to={`/${each.category}/${each.id}/info`}>
                  <Btn text={each.title}/>
                  </Link>
                )
              })
            }
            </>
            ):
            <h5>No products found</h5>
          }
        </div>
    )
}
export default HomeScreen;