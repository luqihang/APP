import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const headerStyle = {
    backgroundColor: "#29b7b9",
    // backgroundImage: "linear-gradient(-20deg, #09b7b9 30%, #1c51a4 100%)",
    borderRadius: '0px',
    border: '0px',
}

const navbarInstance = (
  <Navbar style={headerStyle} inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">App Factory</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">用户</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return navbarInstance;
    }
}
