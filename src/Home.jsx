import React from "react";
import web from "../src/images/home.svg";
import banner_img from "../src/images/12.jpg";
import Common from "./common";
import Background from "./back";
import Image from "./image";
import {Game,Slot} from "./game";
import Banner from "./banner";
import Form from "./form";
const favseries = "amazon";
const Home =()=>{
    return(
         <>
         <Common
         imgsrc={web}
         name="HEY THIS IS HOME PAGE"
         link="https://www.youtube.com/watch?v=RUku45vpSDU&t=2454s"
         btn_name="Contact Us" 
         />
         {/* { favseries === "amazon" ? <Background/> : <Image/>}
         <Game link_value="click" /> 
         <Slot x="😱" y="😨" z="😱"/>  */}
         <Banner
         banner_title="Strategy"  
         banner_img={banner_img}
         banner_content="If you’re reading this, you probably already have some involvement with content in your business. But before you read this, try to define what content strategy is. Chances are, you’ll find that it’s a more slippery concept than it initially seems.  "
         />
         <Form/>
         </>
    ); 
}
export default Home;
