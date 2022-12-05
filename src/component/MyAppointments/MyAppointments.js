import React, { useState } from 'react'

import Table from 'react-bootstrap/Table';


import { Button } from 'react-bootstrap';

import Time from '../ListExperts/Time';
import Edit from './Edit';

const MyAppointments =(props) => {
  // const {state} = useLocation();
  const [show, setShow] = useState(false);


  
 
  // console.log(state);

  const final = (s) => {
    let temp = s.split(" ")
    let str = temp[0]
    for(let i =1; i<4; i++){
    str = str + " " + temp[i]
    }
    return str;
  }
 
const handleShow = () => {
    setShow(true);
    // props.setName(props.name)
}
const handleClose = () =>{
  setShow(false)
}



  return (
    <>
    <div>
       <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            props.card.map(t => (
              <>
              <tr>
                <td>{t.name}</td>
                <td>{final(String(t.date))}</td>
                <td>{t.time}</td>
                
                <td><Button onClick={handleShow}>Edit</Button></td>
                {show ? <Edit id = {t.id} card = {props.card}  setCard = {props.setCard} vis ={handleClose}/> : null}
              </tr>
             
              </>
              
            ))
          }
        </tbody>

       </Table>
    </div>
  
    
   
    </>
  )
}

export default MyAppointments
