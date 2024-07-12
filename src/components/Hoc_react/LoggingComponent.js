import React, { useEffect } from 'react'

const loggingComponent = (WrappedComponent) => {
    return (props)=>{
        useEffect(()=>{
            console.log(props);
        },[props])
        return <WrappedComponent/>
    }
 
}
export default loggingComponent;
