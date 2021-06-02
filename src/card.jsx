import React from 'react';
import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    return(
        <>
        <div className="col-lg-4 col-md-6 col-sm-12"> 
        <div className="card">
            <div className="card-body">
                <div className="card-image">
                    <img src={props.card_img} alt="..."/>
                </div>
            <div className="card-title">
                <h4>{props.card_title}</h4>
            </div>
            <div className="card-content">
                <p>{props.card_content}</p>
                <NavLink to="#">{props.link_value}</NavLink>
            </div>
            </div>
        </div>
        </div>
        </>
        );
}
export default Card;