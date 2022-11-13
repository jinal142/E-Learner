import Card from 'react-bootstrap/Card';
import './CardHome.css';
 const CardHome = (prop) => {
    return(
        <div>
             <Card className='card-home-style' style={{ width: '18rem', height:'300px', marginTop: '40px',
    marginLeft: '50px', backgroundColor: 'aqua' }}>
                <Card.Body>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Img variant="top" src={prop.source} />
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        {prop.text}
                    </Card.Text>
                    
                </Card.Body>
            </Card> 
        </div>
    );  

 }

 export default CardHome;