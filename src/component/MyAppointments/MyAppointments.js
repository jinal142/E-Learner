import React from 'react'
import Header from '../Header'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router';

const MyAppointments =() => {
  return (
    <>
    <Header path = {useLocation().pathname}/>
    <div style={{justifyContent:'center'}}>
      <div class="d-flex justify-content-center" style={{alignItems:"center"}}>
        <h2 style={{color :'black', marginTop:"50px", fontSize:"50px", textShadow:"5px 5px 5px rgba(0,0,0,.4)"}}>My Appointments</h2>  
      </div>      
      
      <div style={{margin:'50px',padding:'50px'}}>
        <Table striped bordered hover >
            <thead>
                <tr class="table-dark">
                    <th><strong>Expert Name</strong></th>
                    <th><strong>Appointment Date</strong></th>
                    <th><strong>Appointment Time</strong></th>
                    <th><strong>Topic</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tirth Raval</td>
                    <td>17 November 2022</td>
                    <td>02:00pm</td>
                    <td>Airbnb</td>
                </tr>
                <tr>
                    <td>Vedant Shah</td>
                    <td>18 November 2022</td>
                    <td>12:00pm</td>
                    <td>Walmart</td>
                </tr>
            </tbody>
        </Table>
    </div> 
    </div>
    </>
  )
}

export default MyAppointments
