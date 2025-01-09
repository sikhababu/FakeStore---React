import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ item }) {
    return (
        <Card className="card">
            <Card.Img variant="top" src={item.image} className="card-img-top"  />
            <Card.Body className="card-body">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    
                    {item.description.slice(0, 100)}...
                   
                
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">${item.price}</span>
            <Button variant="primary">View Details</Button>
            
            </div>
        </Card.Body>
    </Card >
  );
}

export default ProductCard;