import {AiFillStar} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-date-picker';
import Time from './Time';
import './ListExperts.css'
import { formatCountdown } from 'antd/lib/statistic/utils';
//import { Form } from 'react-bootstrap/lib/navbar';



const Expert = (props) =>{
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(new Date());
    const [time, setDisplay] = useState(false);
    const [isTimePicked, setIsTimePicked] = useState(false);

    const[stime, setStime] = useState('');
    const[sdate, setSdate] = useState('');
    // const[ sname, setName] = useState('');

    
   ;

    const handleClose = () => {
        setShow(false);
        setDisplay(false)
    
    }
    const handleShow = () => {
        setShow(true);
        // props.setName(props.name)
    }
    const bookSuccsfull = ()=>{
        if (time === true && isTimePicked === true){
            alert("Appointment has been booked ");

            if(sdate !== '' && stime !== ''){
                props.setCard([{
                    id: props.id,
                    name:props.name,
                    date:sdate,
                    time:stime
                    
                }, ...props.card])
            }
          
            setDisplay(false);
            setIsTimePicked(false);
            setShow(false);
            
        }
        else if(time === true && isTimePicked === false){
            alert("Please select the time");
            // setShow(false);

        }

        else if (time === false && isTimePicked === true){
          
            alert("Please select valid appointment data ! ");
            // setShow(false);
        }
        else{
            alert("Please select valid appointment data and Time ! ");
            // setShow(false);
        }
        
         
    }
    const handleTime = (e) => {
        setStime(e.target.value)
        // console.log(e.target.value)
        setIsTimePicked(true)
    }

    const handleChange = (e)=>{
        setDisplay(true);
        // console.log(typeof(e));
        setSdate(String(e));
    }

    



        return(
            <div className='expert bg-gradient rounded' style={{backgroundColor:"#bbdffc"}}>

                
                <div >
                    <img  className="profile-img" src= {props.src} alt = "logo"></img>
                    <p style={{marginLeft:"50px", marginTop:"20px"}}><AiFillStar style={{fontSize:"25px"}}/><AiFillStar style={{fontSize:"25px"}}/><AiFillStar style={{fontSize:"25px"}}/><AiFillStar style={{fontSize:"25px"}}/><AiFillStar style={{fontSize:"25px"}}/></p>
                </div>
                <div className='m-5'>
                    <h3 style={{textAlign:"left", marginLeft:"13px"}}><b>Name: {props.name}</b></h3>
                    <h3 style={{textAlign:"left", marginLeft:"13px"}}><b>Languages: {props.lang}</b></h3>
                    {props.call_val ? <p style={{color: 'green', fontSize:"30px", textAlign:"left", marginLeft:"13px"}}>
                    <BsCircleFill style={{color: 'green', fontSize:"20px", textAlign:"left", marginLeft:"1px", border:"3px black"}}/>&nbsp;<b>Available</b></p> : <p style={{color: 'red', fontSize:"30px", textAlign:"left", marginLeft:"13px"}}>
                    <BsCircleFill style={{color: 'red', fontSize:"20px", textAlign:"left", marginLeft:"1px", border:"3px black"}}/>&nbsp;<b>Unavailable</b></p>}
                    <button onClick={handleShow} className='btn btn-primary m-3' style={{fontSize:"25px"}}>Schdule an Appointments</button>
                    <Modal show ={show} onHide= {handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Schdule Appointments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            
                            <DatePicker onChange={(e) => { setValue(e); handleChange(e); }} value={value} minDate ={value}/>
                            {   time ?  <Time time ={props.time_array} method = {handleTime}/>  : null  }         
                           

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
                        props.call_val ? <button class="btn btn-success"><a href='https://meet.google.com/rsg-weac-fii?pli=1' target="_blank" class = 'a' style={{fontSize:"25px"}}>Call</a></button>:
                        <button class="btn btn-danger" onClick = {()=>{
                            alert(props.name +" is not available, can you please Schdule an appoitment");
                        }} style={{fontSize:"25px"}}>Call</button>

                    }
                    
                </div>

            </div>
        );
};

export default Expert;