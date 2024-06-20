export const Img=(prop)=>{
    const{src,width,height,alt}=prop;
    return(
        <img src={src} width={width} height={height} alt={alt}/>//<img {...prop}/>
    )
};