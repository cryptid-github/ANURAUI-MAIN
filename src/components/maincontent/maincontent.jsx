import React from 'react';
import './maincontent.scss';
import MapImg from "../../assets/Map_Final.jpg"
 



function maincontent(){
 
    return(

    <div className='maincontent'>
            <img  id="drag-img" src={MapImg} alt="" />

        
    </div>

)}
export default maincontent;
