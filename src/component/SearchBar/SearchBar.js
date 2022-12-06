import React, {useState, useEffect } from 'react';
import {FiSearch} from 'react-icons/fi'
import { Home } from '../../containers/Home/Home';

import {Container, Form} from 'react-bootstrap';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () =>{
    const [search, setSearch] = useState("");
    //const [display, setDisplay] = useState(false);
    const navigate = useNavigate()
    
    
    
    const  handlSearch = () => {

            navigate("/results",{ state : {search} },{replace:true})
            
        
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
   return(
    <div className='home' style={{marginTop:"40px", height:"50px"}}>
            

            <div className="SearchContainer" class="d-flex justify-content-center" >
                <Form className='form-control form-control-lg form-control-borderless'>
                        <Form.Control  style={{width:"900px"}} onChange={(e) => {handleSearchChnage(e)}} 
                            onKeyDown={(e)=>handleEnter(e)} value={search} type="text" placeholder="Search here" />           
                        
                </Form>
            </div>    

            &nbsp;
            &nbsp;

            <div className="SearchContainer" class="d-flex justify-content-center">
                
                    <button class="btn btn-lg btn-primary" onClick={handlSearch} style={{boxShadow: "5px 5px 5px rgba(0,0,0,.4)"}}> 
                        <FiSearch style={{height:"25px", width:"25px"}}/>
                    </button>
           
            </div>    

            
        </div>
   )

}

export default SearchBar;