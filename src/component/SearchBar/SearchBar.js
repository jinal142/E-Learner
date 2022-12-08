import React, {useState, useEffect } from 'react';
import {FiSearch} from 'react-icons/fi'
import { Home } from '../../containers/Home/Home';

import {Container, Form} from 'react-bootstrap';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import { Component } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = () =>{
    const [search, setSearch] = useState("");
    //const [display, setDisplay] = useState(false);
    const navigate = useNavigate()
    
    const items = [
        {
          name: 'Uber'
        },
        {
          name: 'Airbnb'
        },
        {
          name: 'Walmart'
        },
        {
          name: 'Doordash'
        },
        {
          name: 'Venmo'
        }
      ]

  /*   const  handlSearch = () => {
              
    }

    const handleSearchChnage = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value);
        // console.log(e.key)
    }; */

    const handleEnter = (e) =>{
    
        
            // console.log(e.target.value)
            console.log("in search");
            const searchTerm = search.toUpperCase();
            const allowedSearchTerms = new Set(['UBER', 'VENMO', 'AIRBNB', 'DOORDASH', 'WALMART'])


            if (!allowedSearchTerms.has(searchTerm)) {
                //navigate("/",{replace:true})
                alert("Please Search from one of the following topics: \n Walmart, Uber, Venmo, Doordash, Airbnb");
                return
            } else {
                navigate("/results",{ state : {search} },{replace:true})
             }
        
    }

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        //console.log(string, results)
        setSearch(string)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        //console.log(item)
        setSearch(item.name)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    const formatResult = (item) => {
        return (
          <>
            <span>{item.name}</span>
          </>
        )
      }

   return(
    <div className='home' style={{marginTop:"40px", height:"50px"}}>

        <div style={{ width: 800 }}>
          <ReactSearchAutocomplete
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            items={items}
            autoFocus
            formatResult={formatResult}
          />
        </div>
        <div className="SearchContainer" class="d-flex justify-content-center">
                
                    <button class="btn btn-lg btn-primary" onClick={handleEnter} style={{boxShadow: "5px 5px 5px rgba(0,0,0,.4)"}}> 
                        <FiSearch style={{height:"25px", width:"25px"}}/>
                    </button>
           
            </div>
    </div>
   )

}

export default SearchBar;