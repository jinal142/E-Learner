
import React,{useState, use} from 'react';
import "./Home.css";
import {FiSearch} from 'react-icons/fi'
import {Container, Form} from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import SearchResults from '../../component/SearchResults/SearchResults';
import { useNavigate } from 'react-router-dom';
import CardHome from '../../component/CardHome/CardHome';
import { Input, Button } from 'antd'


const Home = () => {

    const [search, setSearch] = useState("");
    //const [display, setDisplay] = useState(false);
    const navigate = useNavigate()
    
    
    
    const  handlSearch = () => {

        if(search === "uber"){
            navigate("/results",{replace:true})
            
        }
    }

    const handleSearchChnage = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value);
        // console.log(e.key)
        
        
    };

    const handleEnter = (e) =>{
    
        if(e.key === "Enter"){
            // console.log(e.target.value)
             handlSearch();
        }
    }


  return (
    <div style={{backgroundColor:'azure'}}>
        <div>
            <img class="home-image" src="img/logo-no-background.png" alt="Logo"/>
        </div>

        <Container className='home' style={{marginTop:"50px"}}>
            

            <div className="SearchContainer" class="d-flex justify-content-center">
                <Form className='home-searchbar'>
                        <Form.Control  style={{width:"800px"}} onChange={(e) => {handleSearchChnage(e)}} 
                            onKeyDown={(e)=>handleEnter(e)} value={search} type="text" placeholder="Search here" />           
                        
                </Form>
            </div>    
            &nbsp;
            &nbsp;
            <div className="SearchContainer" class="d-flex justify-content-center">
                
                    <button onClick={handlSearch} style={{height:"40px", width:"40px"}}> 
                        <FiSearch style={{height:"25px", width:"25px"}}/>
                    </button>
           
            </div>    

            
        </Container>

        {/* <Container className='home'>
                
                <div className='LogoContainer'>
                    <Input 
                        placeholder='Search Here' 
                        value={ search } 
                        type ="text"
                        onChange={(e) => {handleSearchChnage(e)}} 
                        className="Input" />
                </div>

                <div className='ButtonContainer my-2'>
                    <Button 
                        variant='danger' 
                        onClick={handlSearch}
                        size="lg" className='ButtonHome'>
                            Search
                    </Button>
                </div>
        </Container> */}

        

        <div style={{marginTop:"70px"}}>
        
            <h1 class="d-flex justify-content-center"> How do we work </h1>
            <br/>
            <div className="home" class="d-flex justify-content-center"> 
        
                <CardHome style={{marginLeft:"50px"}} text = " We provide the solution in the Text form" title = "Step 1"/>&nbsp;&nbsp;
                <CardHome style={{marginLeft:"1000px"}} text = "If it doesrnt work we you can try our video soultion" title = "Step 2"/>&nbsp;&nbsp;
                <CardHome text = "We also provide the talk with exper option"  title = "Step 3"/>
        
            </div>
        
        </div>

        

    </div>
    
  )
}

export default Home;