import React from 'react'
import Header from '../Header'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router';

const History =() => {
  return (
    <>
    <Header path = {useLocation().pathname}/>
    <div style={{justifyContent:'center'}}>
      <div class="d-flex justify-content-center" style={{alignItems:"center"}}>
        <h2 style={{color :'black', marginTop:"50px", fontSize:"50px", textShadow:"5px 5px 5px rgba(0,0,0,.4)"}}>History</h2>  
      </div>      
      
      
        <Table striped bordered hover variant="dark" style={{marginTop:'50px'}}>
            <thead>
                <tr>
                  
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
      
    </div>
    </>
  )
}

export default History
