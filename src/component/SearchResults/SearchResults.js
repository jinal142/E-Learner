import ReactPlayer from 'react-player'
import './SearchResults.css';
import {FlashcardComponent} from 'react-flashcard'
import {FiSearch} from 'react-icons/fi'
import {Row,Col, Form} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import {Container, Button} from 'react-bootstrap';
import Cards from '../FlashCards/Cards';
import Header from '../Header';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';


const fields = [
  {
    fields: {
      
      side1: "./img/1.jpeg",
      side2: "step1"
    }
  },
  {
    fields: {
      
      side1: "./img/2.jpeg",
      side2: "camping"
    }
},
{
  fields: {
      
    side1: "./img/3.jpeg",
    side2: "camping"
  }
},
{
  fields: {
      
    side1: "./img/4.jpeg",
    side2: "camping"
  }
}

]


const SearchResults = (prop) => {

  const {state} = useLocation();
  console.log(state);

  const [msg, setMsg] = useState(state.search);
  const handleChange = (e)=>{
    // console.log(e.target.value)
    setMsg(e.target.value)
  

  }


  const navigate = useNavigate()

  const handleLogin =()=>{
    //console.log("Hello Login");
    navigate("/login",{replace:true})
  }
    
    return(
        <>
            <Header/>
            
            <Container className='home' style={{marginTop:"50px"}}>            

                <div className="SearchContainer" class="d-flex justify-content-center">
                  <Form className='home-searchbar'>
                    
                      <Form.Control  style={{width:"800px"}} value={msg} type="text" placeholder="Search here" onChange={handleChange} />           
                            
                  </Form>
                </div>   
                
                &nbsp;
                &nbsp;
                {console.log(msg)}
                <div className="SearchContainer" class="d-flex justify-content-center">
                    
                  <button style={{height:"40px", width:"40px"}}> 
                    <FiSearch style={{height:"25px", width:"25px"}}/>
                  </button>
              
                </div>   
                
            </Container>


            <Container  style = {{marginTop:"20px"}}>
                
                <Row  style={{marginTop:"80px"}}>
                  <Col md={4} sm={4} lg={4}>
                  <h3 style={{}}> 1. Picture  solution</h3>
                  <div className="home-1">         
                    { msg === "uber" ? <Cards dataSource = {fields}/> :
                    msg === "dropbox" ? <Cards dataSource = {fields}/>:
                    msg === "vinmeo"? <Cards dataSource = {fields}/> : null}
                    
                  </div>

                  </Col>
                  <Col md={2} sm={2} lg={2}></Col>
                    <Col  md={4} sm={4} lg={4}>
                   
                    <h3>2. video solution</h3>
                    <div className='video'>
                    { msg === "uber" ? <ReactPlayer url = "https://www.youtube.com/watch?v=zKL5FuZia-E" /> :
                    msg === "dropbox" ? <ReactPlayer url = "https://www.youtube.com/watch?v=4Nan6Zt6bzw"/>:
                    msg === "vinmeo"? <ReactPlayer url ="https://www.youtube.com/watch?v=wcWRP25F4zA"/> : null}
                    
                    
                    
                    </div>
                    <div style={{marginTop:"100px", display: "flex", justifyContent:"space-between"}}>
                    <h3>3. Still confused?
                    <Button className = "Button" onClick={handleLogin}>Talk with an expert</Button>
                    </h3>
                    
                </div>
                </Col>
                </Row> 
            </Container>
        </>
    );
}

export default SearchResults;