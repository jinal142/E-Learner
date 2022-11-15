import Card from 'react-bootstrap/Card';
import './CardHome.css';
 const CardHome = (prop) => {
    return(
        <div>
            <Card style={{ width: '18rem', height:'200px', marginTop: '40px', marginLeft: '50px', marginBottom:"30px", borderRadius:"20px"}}>
                <Card.Body style={{backgroundColor:"#5094f2",borderRadius:"20px", border:"3px solid #04306e"}}>
                    <Card.Header style={{backgroundColor:"#061556", borderRadius:"25px", color:"white", fontSize:"25px"}}>{prop.title}</Card.Header>
                    <Card.Text style={{color:"white", fontSize:"20px"}}>
                        {prop.text}
                    </Card.Text>
                    
                </Card.Body>
            </Card> 
            
        </div>
    );  

 }

 export default CardHome;