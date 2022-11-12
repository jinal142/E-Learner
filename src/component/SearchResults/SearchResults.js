import ReactPlayer from 'react-player'
import './SearchResults.css';
import {FlashcardComponent} from 'react-flashcard'
import {FiSearch} from 'react-icons/fi'
import {Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {Container, Button} from 'react-bootstrap';


const cardData = [
  {
    front: {
      
      image: "./img/1.jpeg",
    },
    back: {
      text: "Camping",
    }
  },
  {
  front: {
    
    image: "./img/2.jpeg",
  },
  back: {
    text: "Camping",
  }
},
{
  front: {
    
    image: "./img/3.jpeg",
  },
  back: {
    text: "Camping",
  }
},
{
  front: {
    
    image: "./img/4.jpeg",
  },
  back: {
    text: "Camping",
  }
}

]


const SearchResults = (prop) => {

  const navigate = useNavigate()

  const handleLogin =()=>{
    //console.log("Hello Login");
    navigate("/login",{replace:true})
  }
    
    return(
        <>
         
            <Container className='home' style={{marginTop:"50px"}}>            

                <div className="SearchContainer" class="d-flex justify-content-center">
                  <Form className='home-searchbar'>
                    
                      <Form.Control  style={{width:"800px"}} value={"Uber"} type="text" placeholder="Search here" />           
                            
                  </Form>
                </div>   
                
                &nbsp;
                &nbsp;

                <div className="SearchContainer" class="d-flex justify-content-center">
                    
                  <button style={{height:"40px", width:"40px"}}> 
                    <FiSearch style={{height:"25px", width:"25px"}}/>
                  </button>
              
                </div>   
                
            </Container>


            <div className='parent' style = {{marginTop:"20px"}}>
                
                <div className='child' style={{marginTop:"80px"}}>
                    <h3 style={{}}> 1. Picture  solution</h3>

                    <div className="home-1">         
                       <FlashcardComponent dataSource={cardData} />                    
                    </div>
                </div>

                <div className='child' style={{marginTop:"-57px"}}>
                    <h3>2. video solution</h3>
                    <ReactPlayer url = "https://www.youtube.com/watch?v=zKL5FuZia-E" />
                </div>

                <div style={{marginTop:"20px"}}>
                    <h3>3. Still confused?
                      &nbsp;
                      &nbsp;
                      <Button style={{backgroundColor:"#15BAEB", height:"40px",fontSize:"20px", border:"2px solid black"}} onClick={handleLogin}>Talk with an expert</Button>
                    </h3>
                </div>

            </div>
        
            
        </>
    );
}

export default SearchResults;