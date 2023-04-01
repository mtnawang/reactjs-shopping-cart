import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/App.css";

function ProductCard({ product, onAdd, onSubtract }) {
  return (
    <Card className="bg-light me-2 h-auto card-margin shadow">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <h5>
            {product.price.toLocaleString("en-PH", {
              style: "currency",
              currency: "PHP",
            })}
          </h5>
          <br />
          Category: <i>{product.category}</i>
        </Card.Text>
        <Button
          className="me-2"
          variant="primary"
          size="sm"
          onClick={() => onAdd(product)}
        >
          Add
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => onSubtract(product)}
        >
          Subtract
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
