import { useState, useEffect } from "react";
import "./NewLogin.css";
import Header from "../Header";
import {Form, Button} from "react-bootstrap";
import { useNavigate } from 'react-router';

function NewSignUp(props) {
  const initialValues = {email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const[email , setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    
    
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePassword = (e) =>{
    
    setPwd(e.target.value);
  }
  const handleEmail = (e) =>{
    console.log(e.target.value)
    setEmail(e.target.value);
  }


  const handleSubmit = (e) => {
    //console.log("Inside handleSubmit()");  

    e.preventDefault();
    setFormErrors(validate(formValues));
   // setIsSubmit(true);
    // navigate('/bookAppointment',{replace : true});
    
    //console.log("Inside bookAppointment");
  };


  const pressSigUP =() =>{

  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  
  
  
  const validate = (values) => {

    console.log("Inside handleSubmit()");
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    
   if(Object.keys(errors).length === 0){

    if((values.email==="abc@gmail.com" && values.password==="1234") || 
    (values.email==="xyz@gmail.com" && values.password==="2468") || 
    (values.email==="pqr@gmail.com" && values.password==="1010")){
        errors.Form = "User Already Exists!"
        
    }

    else{

        setIsSubmit(true);
        props.setHeaderShow(true);
        navigate('/newlogin', {state : [email,pwd], replace : true} );
        
    }
   }
   



    
    return errors;
  };


//   const goToSignUp = () => {
//     navigate("/newsignup", { replace: true })
//   }


  return (
    <>
    
  
    <div className="container">
    <div className="FormContainer d-flex justify-content-center align-items-center">
      <form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
        
        <div className='LogoContainer'>
            <img src="img/logo-no-background.png" alt="Logo" className="LogoLogin" onClick= {()=> navigate('/',{replace : true})}/>
        </div>
        
        <h3 style={{ textAlign: 'center', marginBottom: '10px', marginTop:"23px", textDecoration: 'underline' }}>Sign Up</h3>
        
        <p style={{fontSize:"25px"}}>{formErrors.Form}</p>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ marginTop:"15px", fontSize:"20px"}}>First Name</Form.Label>
            <Form.Control className='InputLogin' type="text" placeholder="Enter First Name " name="firstName" value={formValues.firstName} onChange={handleChange}/>
          </Form.Group>
          <p>{formErrors.firstName}</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ marginTop:"15px", fontSize:"20px"}}>Last Name</Form.Label>
            <Form.Control className='InputLogin' type="text" placeholder="Enter Last Name" name="lastName" value={formValues.lastName} onChange={handleChange}/>
          </Form.Group>
          <p>{formErrors.lastName}</p>
          
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ marginTop:"15px", fontSize:"20px", alignContent:"left"}}>Username/Email ID</Form.Label>
            <Form.Control className='InputLogin' name="email" type="text" placeholder="Enter Username/Email ID"  value={formValues.email} onChange={(e) =>{handleChange(e); handleEmail(e);}}/>
        </Form.Group>
        <p>{formErrors.email}</p>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ marginTop:"15px", fontSize:"20px"}}>Password</Form.Label>
            <Form.Control className='InputLogin' name="password" type="password" placeholder="Enter password"  value={formValues.password} onChange={(e) =>{handleChange(e); handlePassword(e);}}/>
        </Form.Group>
        <p>{formErrors.password}</p>
        
        <Button style={{backgroundColor:"#15BAEB",width:"100px", height:"40px",fontSize:"20px" }} type="submit" >
            Sign Up
        </Button>

        

      </form>
      </div>
    </div>
    </>
  );
}

export default NewSignUp;