import React from 'react'
import { useNavigate } from 'react-router';
import { Container, Form, Button } from 'react-bootstrap'
import { message } from 'antd';
//import axios from 'axios'

//import Server from  '../../../resources/sources'
import './Login.css'
import Header from '../Header';


const Login = () => {

  const navigate = useNavigate()

  const error = () => {
    message.error('Invalid Credentials. Try again.');
  };

  const onLogoClick = () => {
    navigate("/", { replace: true })
  }

  // const goToSignUp = () => {
  //   navigate("/signup", { replace: true })
  // }

  const formHandler = (event) => {
    event.preventDefault()

    const data = {
      username: event.target[0].value,
      password: event.target[1].value
    }

    // axios
    //   .post(Server.baseURL + '/admins/login', data)
    //   .then((res) => {
    //     console.log(res)
    //     if(res.data.status === "ok") {
    //       navigate("/admin-dash", { replace: true, state: { username: res.data.username } })
    //     } else {
    //       error()
    //     }
    //   })
    //   .catch((err) => console.log(err))   
  }

  return (
    <>
      {/* <Header/> */}
      <Container fluid className='PageContainer'>
      <div className="FormContainer d-flex justify-content-center align-items-center">

        <Form className="rounded p-4 p-sm-3" onSubmit={ formHandler }>
          <div className='LogoContainer'>
            <img src="img/logo-no-background.png" alt="Logo" className="LogoLogin" onClick={ onLogoClick } />
          </div>
          <h3 style={{ textAlign: 'center', marginBottom: '10px', marginTop:"23px", textDecoration: 'underline' }}>Login</h3>  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ marginTop:"15px", fontSize:"20px"}}>Username/Email ID</Form.Label>
            <Form.Control className='InputLogin' type="username" placeholder="Enter Username/Email ID" />
          </Form.Group>

          
          <Button style={{backgroundColor:"#15BAEB",width:"100px", height:"40px",fontSize:"20px" }} type="submit" onClick= {()=> navigate('/bookAppointment',{replace : true})}>
            Login
          </Button>

          <div className='AdminLink'>
         
                <p style={{fontSize:"20px",marginTop:"25px"}}>Don't have an account?</p>            
                <p className='Link' onClick={ goToSignUp } style={{marginTop:"-10px", fontSize:"20px"}}>Sign Up Here</p>
          </div>

        </Form>

      </div>
    </Container>
    </>
   
  )
} 
export default Login;
