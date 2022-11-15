import React from 'react'
import { Card } from 'react-bootstrap';

const NoteCard = () => {
  return (
    <div>
        
            <Card.Body style={{backgroundColor:"#add0ff", borderRadius:"20px", borderRadius:"25px", border:"2px solid black", width:"800px", height:"50px",marginLeft:"420px", marginTop:"100px" , alignItems:"center", boxShadow: "5px 5px 5px rgba(0,0,0,.4)"}}>
                
                                
                <Card.Text style={{fontSize:"30px"}}>
                        Click on login to directly talk with an expert!
                </Card.Text>
                    
            </Card.Body>

        
    </div>
  )
}

export default NoteCard;
