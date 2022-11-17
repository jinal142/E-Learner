import React from 'react'
import Header from '../Header'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router';

const MyAppointments =() => {

const {state} = useLocation();

let s = state[1].date
let temp = s.split(" ")
let final = temp[0]
for(let i =1; i<4; i++){
  final = final + " " + temp[i]
}

  return (
    <>
    <Header path = {useLocation().pathname}/>
    <div style={{justifyContent:'center'}}>
      <div  style={{alignItems:"center"}}>
        <h2 style={{color :'black', marginTop:"50px", fontSize:"50px", textShadow:"5px 5px 5px rgba(0,0,0,.4)"}}>My Next Appointment</h2>  
        { state[0].Time ? <div>
          <h4 style={{marginTop : '50px'}}> Your appoitment has been booked succssesfully at this time {state[0].Time} and on  {final}.</h4>
        <h4> Please connect with the expert using Call button </h4> 
        <button class="btn btn-success"><a href='https://meet.google.com/rsg-weac-fii?pli=1' target="_blank" class = 'a' style={{fontSize:"25px"}}>Call</a></button>
        </div> :
        <h4 style={{marginTop : '50px'}}>You have not selected the Date and Time, Please go back and select</h4>
        }

        
      </div> 

    </div>
    </>
  )
}

export default MyAppointments
