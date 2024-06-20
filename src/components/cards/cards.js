
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AccordianExample from '../Accordian/Acoordian';

function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png" width={300} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <AccordianExample/>
      
    </Card>
  );
}

export default CardExample;