import React from 'react'
import Card from 'react-bootstrap/Card';

const Service = ({service}) => {
    const {name,slot}=service;
  return (
    <div>
        <div className="row">
            <div className="col-md-4">
            <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {slot.length}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
            </div>
        </div>
        
      
        
    </div>
  )
}

export default Service;