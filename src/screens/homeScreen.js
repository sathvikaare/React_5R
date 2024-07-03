import React from "react";
import NavBar from "../components/navBar/navbar";
import { Btn } from "../components/button";
import { Link } from "react-router-dom";
function HomeScreen(){
    return(
        <div>
          <NavBar/>
          <h2>welcome to  Home screen</h2>
          {
            [1,2,3,4].map((each)=>{
              return(<Link to={`/hyderabad/${each}/info`}>
                <Btn text={each}/>
                </Link>
              )
            })
          }
        </div>
    )
}
export default HomeScreen;