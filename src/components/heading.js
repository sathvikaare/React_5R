
import React from "react";
export const Heading1=(prop)=>{//give React.memo(Heading)
    console.log("hiiiii")
    const{title="guest"}=prop;
    return(<h1>{title}</h1>
    )
}


export const Heading2=()=>{
    return(<h2>men's clothing</h2>
    )
}

export const Heading3=(prop)=>{
    const{title}=prop;
    return(<h3>{title}</h3>
    )
}

export const Heading4=()=>{
    return(<h4>men's clothing</h4>
    )
}

export const Heading5=()=>{
    return(<h5>men's clothing</h5>
    )
}

export const Heading6=(prop)=>{//used for children prop
    const{children}=prop;
    return(<h6>{children}</h6>
    )
}