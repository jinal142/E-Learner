import React from 'react'
import Header from '../../component/Header';
import ReactPlayer from 'react-player';
import Breadcrumb from '../../component/Breadcrumb'
import { useState } from 'react';

export const About = () => {
  const [crumbs, setCrumbs] = useState(['About Us']);
  const selected = crumb => {
      console.log(crumb);
    }

  return (
    <>
    
    <div style={{justifyContent:'center'}}>
       <div>
            <Breadcrumb crumbs={ crumbs } selected={ selected }  />
        </div>

      <div class="d-flex justify-content-center" style={{alignItems:"center"}}>
        <h2 style={{color :'black', marginTop:"50px", fontSize:"50px", textShadow:"5px 5px 5px rgba(0,0,0,.4)"}}>About us</h2>  
      </div>      
      
      <div class=" rounded " style={{ width: 1200, height: "750px", alignItems:"center", marginLeft:"200px", marginTop:"30px", marginBottom:"70px", backgroundColor:"#276e8a", boxShadow:"1px 1px 5px rgba(0,0,0,.4)"}}>
                    
          
              
          <p style={{color :'white', fontSize:"30px", paddingLeft:"100px", paddingRight:"100px", paddingTop:"30px"}}>
              <strong>Why are we different?</strong>
              <br/>
              We can find the the solutions in many blogs and videos, however we also provide the one to one session with expert, which can help user significantly
              We provide solution for the challenges that the elderly people face while learning or searching
              for anything online and enabling them to become confident when using technology.
              
          </p>

          <div style={{ width: 500, height: 400, marginLeft:270,marginTop:50}}>
             <ReactPlayer url = "https://youtu.be/StZIgIawSIU" />
          </div>
      </div>
    </div>
    </>
  )
}
