import React from "react";
import mybg from "../src/images/about.jpg"; 
import mynet from "../src/images/onenet.jpg";
import myam from "../src/images/fournet.jpg";
const Background =()=>{
    return(
        <>
        <div className="container"> 
        <div className="row"> 
        <div className="col-lg-3 m-auto">
        <div className="card">
            <div className="card-img mb-3"> 
          <img src={mybg}/>
            </div>
            <div className="card-img mb-3"> 
          <img src={mynet}/>
            </div> 
            <div className="card-img"> 
          <img src={myam}/>
            </div>
        </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Background;