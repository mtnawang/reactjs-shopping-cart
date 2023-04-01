import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "../styles/App.css";

const MyNavbar = ({ onSearch }) => {
  return (
    <Navbar expand="lg" className="shadow sticky-top ps-4 pe-4 bg-light">
      <Navbar.Brand href="#home">
        <img
          src="/images/mylogo2.png"
          alt="Marx"
          style={{ maxHeight: "70px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav text-light">
        <Nav className="mr-auto"></Nav>
        <Form inline className="flexBox">
          <FormControl
            type="text"
            placeholder="Search for products or categories..."
            className="mr-sm-2 flexChild"
            onChange={onSearch}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
