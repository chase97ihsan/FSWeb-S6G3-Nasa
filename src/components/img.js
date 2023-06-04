import React from "react";



   const Img=(props)=>{
    const{dataUrl}=props;
       
        return(
            <div>
             <img src={dataUrl}/>

            </div>

        );



}
export default Img;