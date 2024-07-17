import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div className='card-1'style={{display:'flex', gap:'1rem'}}>
       
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src='https://cdn.pixabay.com/photo/2024/02/19/09/21/ai-generated-8582949_1280.jpg' />
      <Card.Body>
        <Card.Title>Protect Your Business</Card.Title>
       
       
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', height:'17rem' }}>
      <Card.Img variant="top" src='https://cdn.pixabay.com/photo/2024/06/13/15/51/ai-generated-8827898_1280.jpg' />
      <Card.Body>
        <Card.Title>Optimize your systems</Card.Title>
       
      </Card.Body>
    </Card>
    
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src='https://cdn.pixabay.com/photo/2019/11/29/08/34/space-4660847_1280.jpg' />
      <Card.Body>
        <Card.Title>Empower your employees</Card.Title>
        
       
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src='https://cdn.pixabay.com/photo/2019/11/29/08/34/space-4660847_1280.jpg' />
      <Card.Body>
        <Card.Title>Our Solutions</Card.Title>
        
      </Card.Body>
    </Card>

    </div>
  )
}

export default Cards