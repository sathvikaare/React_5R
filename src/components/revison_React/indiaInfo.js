import axios from 'axios';
import React, { useEffect, useState } from 'react'


const IndiaDataFetch = () => {
    const [countries,setCountries]=useState([]);
    const [selectedCountry,setselectedCountry]=useState(null)
  const [selectedCountryData,setselectedCountryData]=useState({});
        // const [data, setData] = useState([]);
    
         useEffect(() => {
            console.log("use effect executing...");
            fetchData();
        },[] );
      
    
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                // console.log(response, "response1");
                nameExtract(response.data)
                 const result=nameExtract(response.data)
                 console.log(result)
                 setCountries(result)
               
                // if (response.status === 200) {
                //     setData(response.data.countries); 
                // }
            } catch (err) {
                console.error("err");
            }
        }
        const nameExtract=(data)=>{
            return data.map((each)=>each.name.official)
        }
        const selectionHandler=(event)=>{
            setselectedCountry(event.target.value);
            fetchSelectedCountry(event.target.value)
        }
        const fetchSelectedCountry=async (countryName)=>{
            const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
            // console.log(response,"selected response");
            setselectedCountryData(response.data[0]);
        }
    
  return (
    <div>
        <h1>country listing</h1>
        <select value={selectedCountry} onChange={selectionHandler}>
            {countries.map((eachCountry)=>
                <option value={eachCountry}>{eachCountry}</option>
            )}
           
        </select>
        <h2>{selectedCountry}</h2>
            {
                Object.keys(selectedCountryData).length>0 && (<>
                <h2>capital city:{selectedCountryData.capital[0]}</h2>
                <h2>country Flag:{selectedCountryData.flag}</h2>
                </>)
            }
    </div>
  )
}
export default IndiaDataFetch;
