// import React from 'react'
// import useAxios from "./useAxios"

// const DataFetch = () => {
//     const [data,error,loading]=useAxios();
//     console.loh(data,error,loading,"data-fetching-component");
//     if(loading){
//       return  <h2>Loading ....please wait....</h2>
//     }
//     if(error){
//         return <h3>Something went wrong please try again later </h3>
//     }
//   return (
//     <div>
//        <h3>Data fetching Component</h3>
//        {data.map((each)=>{
//         return <h3>{each.title}</h3>
//        })}
//     </div>
//   )
// }
// export default DataFetch;
// import { useState } from "react";
import useAxios from "./useAxios";

const DataFetch = () => {
  const [data, error, loading] = useAxios();
  const [categories, categoryError, categoryLoading] = useAxios(
    "https://fakestoreapi.com/products/categories"
  );

  console.log(data, error, loading, "data-fetch-component");

  if (loading && categoryLoading) {
    return <h4>Loading.... Please wait...</h4>;
  }

  if (error && categoryError) {
    return <h4>Something went wrong please try again later</h4>;
  }
  return (
    <>
      <h3>Data fetch component</h3>
      {data.map((each) => {
        return <h4>{each.title}</h4>;
      })}
      <h2>Category list </h2>
      {categories.map((each) => {
        return <h4>{each}</h4>;
      })}
    </>
  );
};

export default DataFetch;