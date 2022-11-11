import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import "./CardHome.css";  

export const CardHome = () => {
  return (
    <div class="card-home-style">
      <Card style={{ width: '25rem' }}>
      <img src="./public/img/card-1.jpg" alt="Text"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>
  )
}
