import Card from 'react-bootstrap/Card';
 const SolutionHome = (prop) => {
    return(
        <div>
             <Card className='card-home-style' style={{ width: '200px', height:'100px', marginTop: '40px',
    marginLeft: '50px' }}>
                <Card.Body>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Img variant="top" src={prop.source} style={{ width: '200px', height:'125px',borderRadius: 20}}/>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        {prop.text}
                    </Card.Text>
                    
                </Card.Body>
            </Card> 
        </div>
    );  

 }

 export default SolutionHome;