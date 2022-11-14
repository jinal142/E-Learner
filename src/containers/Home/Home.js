
import React,{useState, use} from 'react';
import "./Home.css";
import {FiSearch} from 'react-icons/fi'
import {Container, Form} from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import SearchResults from '../../component/SearchResults/SearchResults';
import { useNavigate } from 'react-router-dom';
import CardHome from '../../component/CardHome/CardHome';
import SolutionHome from '../../component/SolutionHome/SolutionHome';
import { Input, Button } from 'antd'
import Header from '../../component/Header';
import SearchBar from '../../component/SearchBar/SearchBar';


const Home = () => {

    // const [search, setSearch] = useState("");
    // //const [display, setDisplay] = useState(false);
    // const navigate = useNavigate()
    
    
    
    // const  handlSearch = () => {

    //     if(search === "uber"){
    //         navigate("/results",{replace:true})
            
    //     }
    // }

    // const handleSearchChnage = (e) => {
    //     // console.log(e.target.value);
    //     setSearch(e.target.value);
    //     // console.log(e.key)
        
        
    // };

    // const handleEnter = (e) =>{
    
    //     if(e.key === "Enter"){
    //         // console.log(e.target.value)
    //          handlSearch();
    //     }
    // }


  return (
    <>
        <Header/>
        <div style={{backgroundColor:'azure'}}>
        <div>
            <img class="home-image" src="img/logo-no-background.png" alt="Logo"/>
        </div>
        <SearchBar/>

        {/* <Container className='home' style={{marginTop:"50px"}}>
            

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

            
        </Container> */}

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
        
        <h1 class="d-flex justify-content-center"> Solutions Offered </h1>
        <br/>
        <div className="home" class="d-flex justify-content-center"> 
    
            <SolutionHome source = "img/uber.jpeg" />
            <SolutionHome source = "img/airbnb.png" />
            <SolutionHome source = "img/doordash.png" />
            <SolutionHome source = "img/venmo.jpeg" />
            <SolutionHome source = "img/walmart.jpeg" />
            
        </div>
    
    </div>
        <div style={{marginTop:"70px"}}>
        
            <h1 class="d-flex justify-content-center"> How do we Work </h1>
            <br/>
            <div className="home" class="d-flex justify-content-center"> 
        
                <CardHome style={{marginLeft:"50px"}} text = " We provide solution in Text & Image format in Flash Cards." title = "Step 1"/>&nbsp;&nbsp;
                <CardHome style={{marginLeft:"1000px"}} text = "We provide solution in Video format." title = "Step 2"/>&nbsp;&nbsp;
                <CardHome text = "We provide solution directly from an expert with talk with expert."  title = "Step 3"/>
        
            </div>
        
        </div>

        

    </div>
    </>
    
    
  )
}

export default Home;