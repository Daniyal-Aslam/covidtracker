import React from "react";
import Common from "./common";
import Card from "./card";
import Sdata from "./Sdata";
import web from "../src/images/about.svg";
const Service =()=>{
    return(
        <>
        <Common
        imgsrc={web}
        name="HEY THIS IS HOME PAGE"
        link="https://www.youtube.com/watch?v=RUku45vpSDU&t=2454s"
        btn_name="Contact Us" 
        />
        <section className="serivce-section">        
        <div className="container">
            <div className="row">
                {
                Sdata.map((val,ind) => {
                        return <Card key={val.id} card_img={val.card_img} link_value={val.link_value} card_title={val.card_title} card_content={val.card_content}/> 
                       })
                }
                </div>
             </div> 
        </section> 
        </>
    );
}
export default Service;
