import React, { useState } from 'react';
import ReactDom from 'react-dom';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';
import { NavLink } from 'react-router-dom';

const Game=(props)=>{ 
    const[person,setPerson]=useState("Daniyal");  
    const handleClick=()=>prompt(person)&(setPerson('Humza'));
    return(
        <>
        <div className="game_head"> 
        <h1>WELCOME TO MY SLOT GAME {person}</h1>
        <div className="card-content m-5">
                <NavLink to="#" onClick={handleClick}  >{props.link_value}</NavLink> 
         </div>
        </div>
        </>
    );
}
const Slot=(props)=>{
    let x = props.x;
    let y = props.y;  
    let z = props.z;  
    if(x==y && y==z){
        return(
            <>
            <div className="slot_game">
            <h1>
            {props.x}  
            <BatteryChargingFullIcon style={{ fontSize: 50 }} className="charge-icon"/> 
            {props.z}  
            </h1>
             
            </div>
            </>
        ); 
    }
    else{
        return(
        <>
            <div className="slot_game">
            <h1>{props.x} <BatteryUnknownIcon style={{ fontSize: 50 
            }} className="charge-icon"/>{props.z}</h1> 
            </div> 
            </>
            );
    }
}
export  {Slot,Game};