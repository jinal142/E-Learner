import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-date-picker';
import Time from '../ListExperts/Time';
import Button from 'react-bootstrap/Button';

const Edit = (props)=>{
    // const{id, card, setCard} = props
    const [show, setShow] = useState(true);
    const [value, setValue] = useState();

    console.log(props)
    // console.log(card.filter((ele)=> ele.id === id)[0].date)
    // const [time, setDisplay] = useState(false);
    // const [isTimePicked, setIsTimePicked] = useState(false);

   
    
 
    // const handleTime = (e) => {
        
    //     // console.log(e.target.value)
    //     setIsTimePicked(true)
    // }

    // const handleChange = (e)=>{
    //     setDisplay(true);
    //     props.date = String(value)
        
    //     // console.log(typeof(e));
        
    // }
   

    return(
        <>
            <Modal show ={show} onHide= {props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Schdule Appointments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            
                            <DatePicker onChange={(e) => { setValue(e) }} value={value} />
                                     
                           

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>
                        Close
                        </Button>
                           
                    </Modal.Footer>

                    </Modal>
        </>
    )
}

export default Edit