import Card from 'react-bootstrap/Card';
 const SolutionHome = (prop) => {
    return(
        <div>
             
                <Card.Body style={{ width: '200px', height:'100px', marginTop: '40px', marginLeft: '50px' }}>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Img variant="top" src={prop.source} style={{ width: '200px', height:'125px',borderRadius: 20}}/>
                    
                    <Card.Text>
                        {prop.text}
                    </Card.Text>
                    
                </Card.Body>
            
        </div>
    );  

 }

 export default SolutionHome;