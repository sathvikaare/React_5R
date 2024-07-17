// import { search } from '@mui/icons-material';
import React, { useState } from 'react'
import ReceipesCard from './receipesCard';
import "./recepie.css"
const RecepiesApp = () => {
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    // const YOUR_APP_ID="8aecf864";
    // const YOUR_APP_KEY="b460ca299374805ea2ad4be4f6ea081a";
    const submitHandler=e=>{
        e.preventDefault();
        fetch(`https://dummyjson.com/recipes/search?q=${search}`).then(
            response=>response.json()
        ).then(data=>setData(data.recipes)
        
    )
    }
  return (
    <center>
    <div>
        <h1>Sathvika's Kitchen Recepies</h1>

        <form onSubmit={submitHandler}>
            <input type='text' class="ip1" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
            <input type='submit' className="btn btn-danger ip2" value="Search Recepie"/>
            
        </form>
        <br/>
        {data.length>1 ?<ReceipesCard data={data}/> :null}
        
    </div>
    </center>
  )
}
export default RecepiesApp;