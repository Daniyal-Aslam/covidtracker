import React from "react";
import web from "../src/images/home.svg";
import { NavLink } from "react-router-dom";
const Common =(props)=>{
    return(
        <header className="home_header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="home_header_content">
                            <h1>{props.name}</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <NavLink to={props.link}>{props.btn_name}</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={props.imgsrc}/>
                    </div>
                </div>
            </div>
        </header>
    ); 
}
export default Common;
