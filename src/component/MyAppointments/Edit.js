import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-date-picker';
import Time from '../ListExperts/Time';
import Button from 'react-bootstrap/Button';

const Edit = (props)=>{
    const{id, date, time, name} = props.modalAppoitment
    const{card, setCard} = props
    const [show, setShow] = useState(true);
    const [value, setValue] = useState(new Date());
    const [timeDisplay, setDisplay] = useState(false);
    const [isTimePicked, setIsTimePicked] = useState(false);
    const[stime, setStime] = useState('');
    const[sdate, setSdate] = useState('');

    const availableTime = [
        {
            id:"1",
            available : ["10AM - 11AM", "11AM - 12PM", "2PM - 3PM", "4PM - 5PM", "5PM - 6PM"]
        },
        {
            id:"2",
            available : ["9AM - 10AM", "10AM - 11PM", "2PM - 3PM", "3PM - 4PM", "5PM - 6PM"]
        
        },
        {
            id:"3",
            available : ["8AM - 10AM", "10AM - 12PM", "2PM - 3PM", "5PM - 6PM", "7PM - 8PM"]
       
        },
        {
            id:"4",
            available : ["8AM - 10AM", "10AM - 12PM", "2PM - 3PM", "5PM - 6PM", "7PM - 8PM"]
           
        }
    ]

    console.log(availableTime.filter((ele) => ele.id === id)[0].available)
    // console.log(card.filter((ele)=> ele.id === id)[0])
    

   
     

     const bookSuccsfull = ()=>{
        if (timeDisplay === true && isTimePicked === true){
            
            if(sdate === date && stime === time){
                alert("Time and date both are selected, select other time and date");
                setDisplay(false);
            }
            else if(sdate === date && stime !== time)
            {
                alert("Appointment has been Edited ");
            card.filter((ele)=> ele.id === id)[0].date= sdate;
            card.filter((ele)=> ele.id === id)[0].time= stime;
            setDisplay(false);
            setIsTimePicked(false);
            props.close()
            }
            else{
                alert("Appointment has been Edited ");
                card.filter((ele)=> ele.id === id)[0].date= sdate;
            card.filter((ele)=> ele.id === id)[0].time= stime;
            setDisplay(false);
            setIsTimePicked(false);
            props.close()
            }
            
            
        }
        else if(timeDisplay === true && isTimePicked === false){
            alert("Please select the time");
            // setShow(false);

        }

        else if (timeDisplay === false && isTimePicked === true){
          
            alert("Please select valid appointment data ! ");
            // setShow(false);
        }
        else{
            alert("Please select valid appointment data and Time ! ");
            // setShow(false);
        }
        
         
    }

    


 
    const handleTime = (e) => {
        
        // console.log(e.target.value)
        setIsTimePicked(true)
        setStime(e.target.value)
    }

    const handleChange = (e)=>{

      setDisplay(true)
      setSdate(String(e));
        
    }
   

    return(
        <>
            <Modal show ={show} onHide= {props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Appointments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            
                            <DatePicker onChange={(e) => { setValue(e); handleChange(e); }} value={value} />
                            {timeDisplay ? <Time time = {availableTime.filter((ele) => ele.id === id)[0].available} method = {handleTime}/> : null}
                                     
                           

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={bookSuccsfull}>
                        Edit
                        </Button>
                           
                    </Modal.Footer>

                    </Modal>
        </>
    )
}

export default Edit