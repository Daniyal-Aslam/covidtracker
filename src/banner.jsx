import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
const Banner=(props)=>{
    return(
        <>
        <section className="first_banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="banner_content">
                        <h1>{props.banner_title}</h1>
                        <p>{props.banner_content}</p> 
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="banner_content">
                        <img src={props.banner_img} />
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}
export default Banner;