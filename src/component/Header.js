import React from 'react';
  import {Link, useNavigate} from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap'; 
import "./Style.css";
import { FaUserCircle } from "react-icons/fa";
import {FiSettings} from 'react-icons/fi';
import {AiOutlineHistory} from 'react-icons/ai';
import {FaRegCalendarTimes} from 'react-icons/fa';
import { Dropdown} from 'react-bootstrap';
import {MdLogout} from 'react-icons/md';


const Header = (props) => {
  const navigation = useNavigate()
 
  const handleChange = ()=>{
    
    navigation("/myappointments" , {state: props.card})  
  }
  return (
    <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Nav class="logo" style={{ width:"50px", marginLeft:"8px"}}>
                  <a href ="/"> <img src="img/logo-no-background.png" alt="Logo"/> </a>
            </Nav>                        
              <Nav>
                <Navbar.Brand as = {Link} to ="/" style={{marginLeft:"60px"}}>E-Learners</Navbar.Brand>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link as={Link} to ="/">Home</Nav.Link>
                <Nav.Link as={Link} to ="/about">About Us</Nav.Link>
              </Nav>
            
            <div> 
                { props.headerShow ? <Dropdown>  
                        <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
                        <Navbar.Brand><FaUserCircle style={{color:'white', marginRight:"5px", width:"90px", height:"40px"}}/></Navbar.Brand>
                        </Dropdown.Toggle>  
    
                        <Dropdown.Menu>  
                            <Dropdown.Item  onClick={handleChange}><FaRegCalendarTimes/>My Appointments</Dropdown.Item>
                            <Dropdown.Item as={Link} to ="/history" ><AiOutlineHistory/>My History</Dropdown.Item>  
                            <Dropdown.Item href="#/action-3"><FiSettings/>Settings</Dropdown.Item>  
                            <Dropdown.Item as ={Link} to = "/" onClick={() => props.setHeaderShow(false)}><MdLogout/>Logout</Dropdown.Item>  
                        </Dropdown.Menu>  
                    </Dropdown> : <Nav className="d-flex justify-content-center align-items-center"><Nav.Link as ={Link} to ="/newlogin"  style={{marginRight:"20px" ,textDecoration: 'underline', fontSize:"20px", cursor:"pointer"}}><b>Login</b></Nav.Link></Nav>
                  
                
                }  
                  
                     
                    

                    
                </div>
          </Navbar>
        </>        
    </div>
  )
}

export default Header;
