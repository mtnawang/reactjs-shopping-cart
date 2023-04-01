import React from "react";
import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer
      className="bg-primary text-light"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
      }}
    >
      <Container className="text-center">
        <p className="mb-0">Marx Shopping. All Rights Reserved 2023</p>
      </Container>
    </footer>
  );
};

export default MyFooter;
