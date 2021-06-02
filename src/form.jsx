import React, { useState } from 'react';
import ReactDom from 'react-dom';
const Form=()=>{
    const [name,setName]= useState("Daniyal");
    const [lastName,setLname]= useState("Aslam");
    return(
        <>
        <div className="container">
            <div className="row">
                <form className="react_form"> 
                <label>{name}</label> 
                <input   placeholder="Name"/>
                <label>{lastName}</label>
                 <input placeholder="Last Name" /> 
                 <input className="btn_sub" onClick={()=>setLname("HAFIZ")} value="Submit"/> 
                </form>
            </div>
        </div>
        </>
    );
}
export default Form;