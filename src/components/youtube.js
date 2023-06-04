import React from "react";



   const Youtube=(props)=>{
    const{youtube}=props;
         
        return(
            <div>
            <iframe width="560" height="500" src={youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        );



}
export default Youtube;