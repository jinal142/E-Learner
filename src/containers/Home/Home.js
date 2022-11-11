
import React,{useState, use} from 'react';
import "./Home.css";
import {FiSearch} from 'react-icons/fi'
import {Form} from 'react-bootstrap';
import { CardHome } from '../../component/CardHome/CardHome';
import SearchResults from '../../component/SearchResults/SearchResults';
import { useNavigate } from 'react-router-dom';


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

        <div class="d-flex justify-content-center">
           <Form class="d-flex justify-content-center">
            <Form.Control className="home-searchBar" type="text" placeholder="Search here" />
           </Form>
        </div>

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

        <div>
            <CardHome>

            </CardHome>
        </div>

        

    </div>
    
  )
}

export default Home;