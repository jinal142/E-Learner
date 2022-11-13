import React, {useState, useEffect } from 'react';
import {FiSearch} from 'react-icons/fi'
import { Home } from '../../containers/Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import './SearchBar.css';

const SearchBar = () =>{
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false);

    useEffect(() => {
      console.log(display)
    }, [])
    
    
    const  handlSearch = () => {

        if(search === "uber"){
            setDisplay(true);
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

    return( 
        <>
                <div className='container-input'>
                
                    <input 
                    value={search}
                    type='text' 
                    placeholder = 'What do you want to search here?' 
                    onChange={(e) => {handleSearchChnage(e)}}
                    onKeyDown={(e)=>handleEnter(e)}
                    />
                    <button onClick={handlSearch}> <FiSearch/></button>
                
                </div>            
            

            {/* {  !display ?  <Home />  : <SearchResults text ={search}/>}          */}
            {/* { display ? <p></p> : <SearchResults text={search} />}            */}
        </>
    );

}

export default SearchBar;