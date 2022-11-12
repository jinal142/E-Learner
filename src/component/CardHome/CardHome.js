import Card from 'react-bootstrap/Card';

 const CardHome = (prop) => {
    return(
        <div>
             <Card style={{ width: '18rem' }}>
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