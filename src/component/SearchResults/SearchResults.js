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
import { message } from 'antd';


const uberFields = [
  {
    fields: {
      side1: [
        "Step-1",
       "This is the Home Page when you Open the Uber Application." ,
       " Click Me to see the picture!",
      ],

      
      side2:"./img/1.jpeg",
    }
  },
  {
    fields: {
     side1: 
      [
        "Step-2",
       "Tap on the search bar and enter the address. And select the appropriate destination.",
       " Click Me to see the picture!",
      ],
      side2:"./img/2.jpeg",
    }
},
{
  fields: {
      
    side1: 
    [
      "Step-3",
     "After select the appropriate car based on number of people travelling, fare and time it will take for the cab to reach." ,
     " Click Me to see the picture!",
    ],
    side2:"./img/3.jpeg",
  }
},
{
  fields: {
      
    side1: 
    [
      "Step-4",
     "Select the pick-up point of the location where the cab should arrive. And after confirming pickup the cab will arrive at the pick-up location." ,
     " Click Me to see the picture!",
    ],
      side2:"./img/4.jpeg",
  }
}
]

const doordashFields = [
  {
    fields: {
      
      side1: 
      [
        "Step-1",
       "This is the Home Page when you Open the Doordash Application where you can directly look for restaurants to food delivery at near by locations. ",
       " Click Me to see the picture!",
      ],
      side2:"./img/d1.png",
    }
  },
  {
    fields: {
      
      side1: 
      [
        "Step-2",
       " You can tap on the search button and search for the type of cuisine, desserts, food items.etc Offered by different restaurants and stores." ,
       " Click Me to see the picture!",
      ],
      side2:"./img/d2.png",
    }
},
{
  fields: {
      
    side1: 
      [
        "Step-3",
       "After selecting your desired choice you can see the restaurants that offer your choice and then based on the ratings and distance and price you can select the restaurant, store,etc. " ,
       " Click Me to see the picture!",
      ],
      side2:"./img/d3.png",
  }
},
{
  fields: {
      
    side1: 
      [
        "Step-4",
       "After selecting the restaraunt there is an option for pick up or delivery choose accordingly." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/d4.png",
  },
  fields: {
      
    side1: 
      [
        "Step-5",
       "from the various options select the food items of you choice and tap on the “+“ button." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/d5.png",
  },
  fields: {
      
    side1: 
      [
        "Step-6",
       "After selecting the food items of you order tap on view cart." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/d6.png",
  },
  fields: {
      
    side1: 
      [
        "Step-7",
       "It will show the items and its quantity and after verify it and th order total tap on continue." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/d7.png",
  },
  fields: {
      
    side1: 
      [
        "Step-8",
       "Enter your delivery address and the payment method and your conatct number and then tap on next and complete you order and then food will be delivered to your house.",
       " Click Me to see the picture!",
      ],
    side2:"./img/d8.png",
  }
}
]

const airbnbFields = [
  {
    fields: {
      
      side1: 
      [
        "Step-1",
       "This is the Home Page when you Open the Airbnb Application where you can directly look for properties to stay at near by destinations.",
       " Click Me to see the picture!",
      ],
      side2:"./img/a1.png",
    }
  },
  {
    fields: {
      
      side1: 
      [
        "Step-2",
       " Here you can select the location, dates and number of people staying in the property. " ,
       " Click Me to see the picture!",
      ],
      side2:"./img/a2.png",
    }
},
{
  fields: {
      
    side1: 
      [
        "Step-3",
       "After entering desired details and tap on the search button.",
       " Click Me to see the picture!",
      ],
      side2:"./img/a3.png",
  }
},
{
  fields: {
      
    side1: 
      [
        "Step-4",
       "You will be given various different properties and price ranges. Select the desired property." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/a4.png",
  },
  fields: {
      
    side1: 
      [
        "Step-5",
       "After selecting the property you can know more about it like its images, near by places, number of rooms, amenities with the property,etc. " ,
       " Click Me to see the picture!",
      ],
    side2:"./img/a5.png",
  },
  fields: {
      
    side1: 
      [
        "Step-6",
       "After tapping the reserve button you can see the charges og the property. Verify the details that you have entered are correct." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/a6.png",
  },
  fields: {
      
    side1: 
      [
        "Step-7",
       "After that tap on request to book and pay the required amount and you have booked your Airbnb property" ,
       " Click Me to see the picture!",
      ],
    side2:"./img/a7.png",
  }
}
]

const venmoFields = [
  {
    fields: {
      
      side1: 
      [
        "Step-1",
       "This is the Home Page when you Open the Venmo Application.",
       " Click Me to see the picture!",
      ],
      side2:"./img/v1.png",
    }
  },
  {
    fields: {
      
      side1: 
      [
        "Step-2",
       " Search the Person/Business though their Venmo ID or Scan through QR code." ,
       " Click Me to see the picture!",
      ],
      side2:"./img/v2.png",
    }
},
{
  fields: {
      
    side1: 
      [
        "Step-3",
       "Select on the Person/Business." ,
       " Click Me to see the picture!",
      ],
      side2:"./img/v3.png",
  }
},
{
  fields: {
      
    side1: 
      [
        "Step-4",
       "Enter the Amount of Money that you want to pay or Request Money. Also Enter a Note for what purpose are are paying money or requesting it." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/v4.png",
  }
}
]

const walmartFields = [
  {
    fields: {
      
      side1: 
      [
        "Step-1",
       "This is the Home Page when you Open the Walmart Application where you can directly look for items that you need.",
       " Click Me to see the picture!",
      ],
      side2:"./img/w1.png",
    }
  },
  {
    fields: {
      
      side1: 
      [
        "Step-2",
       " You can tap on the search button and also search the item you want.",
       " Click Me to see the picture!",
      ],
      side2:"./img/w2.png",
    }
  },
  {
  fields: {
      
    side1: 
      [
        "Step-3",
       "After entering the item you want in search bar you will be presented with different items and also related items based on your search.",
       " Click Me to see the picture!",
      ],
      side2:"./img/w3.png",
    }
  },
  {
  fields: {
      
    side1: 
      [
        "Step-4",
       "After that add the items to the cart by tapping on the “+” button." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/w4.png",
    },
  },
  {
  fields: {
      
    side1: 
      [
        "Step-5",
       "Press on the Cart icon to see the items in your cart and after verifying the items you can tap on checkout all items." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/w5.png",
    },
  },
  {
  fields: {
      
    side1: 
      [
        "Step-6",
       "Select the way of receiving the items by pick-up or delivery." ,
       " Click Me to see the picture!",
      ],
    side2:"./img/w6.png",
    },
  },
  { 
  fields: {
      
    side1: 
      [
        "Step-7",
        "After that you can pay for the order and then the order will be placed.",
       " Click Me to see the picture!",
      ],
    side2:"./img/w7.png",
  }
}
]

const SearchResults = (prop) => {

  const {state} = useLocation();
  console.log(state);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState(state.search);

  const handleChange = (e)=>{
    
    setMsg(e.target.value);
  }

  const  handlSearch = () => {
    console.log("in search");
    const searchTerm = msg.toUpperCase();
    const allowedSearchTerms = new Set(['UBER', 'VENMO', 'AIRBNB', 'DOORDASH', 'WALMART'])


    if (!allowedSearchTerms.has(searchTerm)) {
      navigate("/",{replace:true})
      alert("Please Search from one of the following topics: \n Walmart, Uber, Venmo, Doordash, Airbnb");
      return
    } else {
      navigate("/results",{ state : {search: msg} },{replace:true})
    }
    
    
    

}
  const handleEnter = (e) =>{
    console.log(e);
    if(e.key === "Enter"){
        e.preventDefault();
         handlSearch();
    }
  }
  const navigate = useNavigate()

  const handleLogin =()=>{
    navigate("/login",{replace:true})
  }
    
    return(
        <>
            {/* <Header/> */}
            
            <Container className='home' style={{marginTop:"50px"}}>            

                <div className="SearchContainer" class="d-flex justify-content-center">
                  <Form className='form-control form-control-lg form-control-borderless'>
                    
                      <Form.Control  style={{width:"800px"}} onKeyDown={(e)=>handleEnter(e)}  value={msg} type="text" placeholder="Search here" onChange={handleChange} />           
                            
                  </Form>
                </div>   
                
                &nbsp;
                &nbsp;
                {console.log(msg)}
                <div className="SearchContainer" class="d-flex justify-content-center">
                    
                  <button class="btn btn-lg btn-primary" onClick={handlSearch}> 
                    <FiSearch style={{height:"25px", width:"25px"}}/>
                  </button>
              
                </div>   
                
            </Container>


            <Container  style = {{marginTop:"20px", minHeight:"100vh"}}>
                
                <Row  style={{marginTop:"80px"}}>
                  <Col md={4} sm={4} lg={4}>
                  <div class="bg-secondary rounded p-3" style={{ width: 450, height: 700}}>
                  <h3 style={{color :'white'}}> 1. Image  Solution</h3>
                  <div className="home-1">         
                    { msg.toUpperCase() === "UBER" ? <Cards dataSource = {uberFields}/> :
                    msg.toUpperCase() === "VENMO"? <Cards dataSource = {venmoFields}/> :
                    msg.toUpperCase() === "AIRBNB"? <Cards dataSource = {airbnbFields}/> :
                    msg.toUpperCase() === "DOORDASH"? <Cards dataSource = {doordashFields}/> :
                    msg.toUpperCase() === "WALMART"? <Cards dataSource = {walmartFields}/> : null
                    }
                    
                  </div>
                  </div>

                  </Col>
                  <Col md={2} sm={2} lg={2}></Col>
                    <Col  md={4} sm={4} lg={4}>
                    <div class="bg-secondary rounded p-2" style={{ width: 550, height: 480}}>
                    <h3 style={{color :'white'}}>2. Video Solution</h3>
                    <div className='video'>
                    { msg.toUpperCase() === "UBER" ? <ReactPlayer url = "https://www.youtube.com/watch?v=zKL5FuZia-E" /> :
                    msg.toUpperCase() === "VENMO"? <ReactPlayer url =" https://www.youtube.com/watch?v=O61hMHYWqc8"/> : 
                    msg.toUpperCase() === "AIRBNB"? <ReactPlayer url ="https://www.youtube.com/watch?v=gOqRiXDGNCc"/>:
                    msg.toUpperCase() === "DOORDASH"? <ReactPlayer url =" https://www.youtube.com/watch?v=F3uRbXg46vM"/>:
                    msg.toUpperCase() === "WALMART"? <ReactPlayer url =" https://www.youtube.com/watch?v=-QWyPzTa6wI"/>:null
                    //msg.toUpperCase() !== "UBER" || "VENMO" || "AIRBNB" || "DOORDASH" || "WALMART"? errorsearch():null
                    }
                    
                    
                    
                    </div>
                    </div>
                    <div class="bg-secondary rounded"style={{ width: 550, height: 190,marginTop:30}}>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                    <h3 style={{color :'white',padding:30}}>3. Still confused?
                    <Button className = "Button1 m-4" onClick={handleLogin}>Talk with an expert</Button>
                    </h3>
                    
                </div>
                </Col>
                </Row> 
            </Container>
        </>
    );
}

export default SearchResults;