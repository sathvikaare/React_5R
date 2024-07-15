import React, { useEffect, useMemo, useState } from 'react';

function Movie({title,release}){
    console.log(`<MemorizeMovie/> rendered`);
    return(
        <div>
            <div>Movie title:{title}

            </div>
            <div>Release  date:{release}</div>
        </div>
    )
}
const MemorizeMovie=React.memo(Movie);
function MovieViewsRelatime({title,release,views}){
    console.log("child 1")
    return(
        <div>
            <MemorizeMovie title={title} release={release}/>
            Movie Views:{views}
        </div>
    );
}
// 3.all views
function ReactMemoApp() {
    const [views,setViews] = useState(0);
    useEffect(()=>{
        const id =setInterval(()=>{
            setViews((views)=>views+Math.floor(Math.random()*10));

        },1000);
        return ()=>clearInterval(id);
    },[])


const movieAmountBasedOnViews=useMemo(()=>{return views*2;   
    },[views])//memorized function,that is memorizes value by views change only using usememo

  return (
    <div>
        <MovieViewsRelatime title="saaho"
        release="12-06-2023"
        views={views}/>
         {/* <MovieViewsRelatime title="Kalki"
        release="24-06-2024"
        views={views}/> */}
        <h2>Amount collection for kalki:{movieAmountBasedOnViews()}</h2>
    </div>
  )
}
export default ReactMemoApp ;