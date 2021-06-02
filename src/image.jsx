import React from "react"; 
import myImg from "../src/images/home.svg";
const Image=()=>{
    return(
    <>
    <div className="card">
        <div className="card-image"> 
            <img src={myImg}/>
        </div>
    </div>
    </>
    );
}
export default Image;