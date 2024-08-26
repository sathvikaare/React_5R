
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const CatDataFetch = () => {
//   const [data,setData]=useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys");
//         setData(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       {data.map((data)=> <img src={data.url} alt={data.id}/>)}
     
//       {/* <p>click below to change image</p> */}
//       <button onClick={fetchData}>change here</button>
//     </div>
//   )
// }
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CatDataFetch = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys"); // Fetch multiple images
//       setData(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((cat, index) => (<>
//       <h1>{cat.id}</h1>
      
//         <img key={index} src={cat.url} alt={cat.id} style={{ margin: '10px', width: '200px', height: '200px', objectFit: 'cover' }} /></>
//       ))}
//       <br />
//       <button onClick={fetchData}>Change Image</button>
//     </div>
//   );
// };

// export default CatDataFetch;

// export default CatDataFetch;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CatDataFetch = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys");
//       setData(response.data[0]); // Set the first (and only) image in the response data
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data && (<div>
//         <img src={data.url} alt={data.id} style={{ margin: '10px', width: '200px', height: '200px', objectFit: 'cover' }} />
//         <p>{data.id}</p></div>
//       )}
//       <br />
//       <button onClick={fetchData}>Change Image</button>
//     </div>
//   );
// };
// export default CatDataFetch;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// const CatDataFetch = () => {
//   const [catData,setCatData]=useState("");
//   const fetchData=async ()=>{
//     try{
//       const response=await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys");
//       setCatData(response.data[0])
//       console.log(response.data,"setdatauseeffect")
//     }catch(error){
//       console("something went wrong")
//     }
//   }
//   useEffect(()=>{
//     fetchData();
//   },[])
//   return (
//     <div>
//       { catData && (
//         <div><h4>{catData.id}</h4>
//           <img src={catData.url} style={{margin:"10px",textAlign:'center',height:'200px',width:'200px'}} alt={catData.id}/></div>)}
//           <button onClick={fetchData}>click here</button>
//     </div>
//   )
// }
// export default CatDataFetch;

