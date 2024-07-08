// import  { useEffect, useState } from "react";
// function DigitalClock(){
//     const [time,setTime]=useState(new Date())
//     useEffect(()=>{
//         const timeInterval=setInterval(() => {
//             setTime(new Date());
//         }, 1000)
//         return ()=>{
//             clearInterval(timeInterval);
//         }
//     },[]);

// const dateFormat=()=>{
//    let hours=time.getHours();
//    hours = hours > 12 ? hours - 12 : hours;
//    hours=hours<10?`0${hours}`:hours;

//    let minutes=time.getMinutes();
//    let seconds=time.getSeconds();

//    minutes=minutes<10?`0${minutes}`:minutes;
//    seconds=seconds<10?`0${seconds}`:seconds;
//    return(
//    <> {`${hours}:${minutes}:${seconds}`}</>
//    )
// }
//     return(
//         <>
//         <h2>Digital Clock</h2>
//         <h1>{dateFormat()}</h1>
//         </>
//     )
// }
// export default DigitalClock;



