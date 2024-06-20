const PropEx=(propsargs)=>{
    // console.log(propsargs);
    const {name,age,details}=propsargs
    return(
        <>
        <h1>hi</h1>
        <div>i,m {name}</div>
        <div>Age:{age}</div>
        <div>Roll:{details.roll}</div>
        <div>branch:{details.branch}</div>
        </>
    )
}
export default PropEx;
 