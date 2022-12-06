import React from 'react'
import Header from '../Header'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router';

const History =() => {
  return (
    <>
    {/* <Header path = {useLocation().pathname}/> */}
    <div style={{justifyContent:'center'}}>
      <div class="d-flex justify-content-center" style={{alignItems:"center"}}>
        <h2 style={{color :'black', marginTop:"50px", fontSize:"50px", textShadow:"5px 5px 5px rgba(0,0,0,.4)"}}>History</h2>  
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
                    <td>Jinal Patel</td>
                    <td>1 November 2022</td>
                    <td>10:00am</td>
                    <td>Doordash</td>
                </tr>
                <tr>
                    <td>Namrata Thaker</td>
                    <td>22 October 2022</td>
                    <td>12:00pm</td>
                    <td>Uber</td>
                </tr>
                <tr>
                    <td>Tirth Raval</td>
                    <td>15 October 2022</td>
                    <td>02:00pm</td>
                    <td>General</td>
                </tr>
                <tr>
                    <td>Vedant Shah</td>
                    <td>30 Spetember 2022</td>
                    <td>11:00am</td>
                    <td>Venmo</td>
                </tr>
            </tbody>
        </Table>
    </div> 
    </div>
    </>
  )
}

export default History
