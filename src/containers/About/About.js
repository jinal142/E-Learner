import React from 'react'
import Header from '../../component/Header';
import ReactPlayer from 'react-player';

export const About = () => {
  return (
    <>
    <Header/>
    <div style={{display:'flex', justifyContent:'center' }}>
    <div class="bg-info bg-gradient rounded" style={{ width: 1200, height: 600, margin:50, paddingleft:100}}>
                    <h2 style={{color :'white'}}>About us</h2>
                    <p style={{color :'black'}}>
                    In recent years, young people have been embracing digital technologies
                    that enable them to be more productive, such as social media, websites, applications, and 
                    online tutoring. Nevertheless, many elderly people are at risk of being left behind because
                    they lack knowledge of the latest technologies. 
                    </p>
                    &nbsp;&nbsp;
                    <p style={{color :'black'}}>
                    To provide solution for the challenges they face while learning or searching
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
