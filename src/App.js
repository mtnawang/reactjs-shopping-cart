import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import data from "./data";
import "./styles/App.css";
import MyNavbar from "./components/MyNavbar";
import { Trash } from "react-bootstrap-icons";
import MyFooter from "./components/MyFooter";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const subtractFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(cart.filter((item) => item.id !== product.id));
      }
    }
  };

  const deleteFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const searchItem = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MyNavbar onSearch={searchItem} />

      <Container className="p-5">
        <Row>
          <Col sm={8}>
            {filteredProducts.length === 0 ? (
              <h3>We can't find what you're looking for.</h3>
            ) : (
              <Row>
                {filteredProducts.map((product) => (
                  <Col key={product.id} xs={12} md={6} lg={4}>
                    <ProductCard
                      product={product}
                      onAdd={() => addToCart(product)}
                      onSubtract={() => subtractFromCart(product)}
                      onDelete={() => deleteFromCart(product)}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
          <Col sm={4}>
            <Card className="mb-3 shadow">
              <Card.Header className="bg-primary text-white">
                Shopping Cart
              </Card.Header>
              <Card.Body>
                {cart.length === 0 && (
                  <p className="text-center fst-italic">
                    Your shopping cart is empty.
                  </p>
                )}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex mb-2"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(120, 120, 120, 0.2)",
                    }}
                  >
                    <div className="flex-grow-1">{item.name}</div>
                    <div className="flex-shrink-0">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>{" "}
                      {item.quantity}{" "}
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => subtractFromCart(item)}
                      >
                        -
                      </Button>{" "}
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => deleteFromCart(item)}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card className="shadow ">
              <Card.Header className="bg-info text-white">Total</Card.Header>
              <Card.Body>
                <h5>
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toLocaleString("en-PH", {
                      style: "currency",
                      currency: "PHP",
                    })}
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
