import {AiFillStar} from 'react-icons/ai'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-date-picker';
import Time from './Time';
import './ListExperts.css'


const Expert = (props) =>{
    const [show, setShow] = useState(false);
    const [value, onChange] = useState();
    const [time, setDisplay] = useState(false);

    const handleClose = () => {
        setShow(false);
        setDisplay(false)
    
    }
    const handleShow = () => setShow(true);
    const bookSuccsfull = ()=>{
        alert("Appointment has been booked ");
        setShow(false);
    }

    



        return(
            <div className='expert'>
                <div >
                    <img  className="profile-img" src= {props.src} alt = "logo"></img>
                    <p ><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                </div>
                <div className=''>
                    <h5>Name: {props.name}</h5>
                    <h4> Languages: {props.lang}</h4>
                    {props.call_val ? <p style={{color: 'green'}}>Avaialbe</p> : <p style={{color: 'red'}}>Unavaialbe</p>}
                    <button onClick={handleShow} className='sch-btn'>Schdule an Appointments</button>
                    <Modal show ={show} onHide= {handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Schdule Appointments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <DatePicker onChange={onChange} value={value} onClick = {() => setDisplay(true)} />
                            {time ? 
                           

                            <Time time ={props.time_array}/>
                             : null
                             
                             }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={bookSuccsfull}>
                            Book
                            </Button>
                    </Modal.Footer>

                    </Modal>
                    {
                        props.call_val ? <button style = {{ backgroundColor: 'green'}}><a href='https://meet.google.com/rsg-weac-fii?pli=1'>Call</a></button>:
                        <button style={{ backgroundColor: 'red'}} onClick = {()=>{
                            alert(props.name +" is not avaialbe, can you please Schdule an appoitment");
                        }}>Call</button>

                    }
                    
                </div>

            </div>
        );
};

export default Expert;