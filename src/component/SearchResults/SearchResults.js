import ReactPlayer from 'react-player'
import './SearchResults.css';
import {FlashcardComponent} from 'react-flashcard'


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
    
    return(
        <>
            <div style = {{marginTop:"20px"}}>
                <div>
                    <h3 style={{}}> 1. Picture  solution</h3>
                    <div className="home-1">
                        

                   <FlashcardComponent dataSource={cardData} />

                    
                    
                    
                        {/* <Cards  source = "./img/1.jpeg" text ="Open the application and click on where to go"/>
                        <Cards  source = "./img/2.jpeg" text  = "select the location where you want to go"/>
                        <Cards  source = "./img/3.jpeg" text = "select the car type and you will able to see the amount"/>
                 <Cards source = "./img/4.jpeg" text = " click on confirm your pickup"/> */}

                    </div>
                </div>
                <div style={{marginTop:"20px"}}>
                    <h3>2. video solution</h3>
                    <ReactPlayer url = "https://www.youtube.com/watch?v=zKL5FuZia-E" />
                </div>
                <div style={{marginTop:"20px"}}>
                    <h3>3. Talk with expert</h3>
                    <button>Talk with expert</button>
                </div>
            </div>
        
            
        </>
    );
}

export default SearchResults;