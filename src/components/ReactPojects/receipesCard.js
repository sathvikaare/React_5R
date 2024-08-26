import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function ReceipeCard(props) {
    const {data}=props;
  return (
    <div className='row' style={{display:'flex',rowGap:40,columnGap:40,justifyContent:'space-evenly',}}>
    {data.map(data=><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.image}/>
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
      Calories : {data.caloriesPerServing}
      </Card.Text>
      <Button variant="danger">Buy Now</Button>
      <NavLink to="/recepie">view more</NavLink>
    </Card.Body>
  </Card>

  )}
</div>
  );
}

export default ReceipeCard;