import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const headerStyle = {
    backgroundColor: "#29b7b9",
    // backgroundImage: "linear-gradient(-20deg, #09b7b9 30%, #1c51a4 100%)",
    borderRadius: '0px',
    border: '0px',
    height: '50px',
    lineHeight: '50px',
}

const navbarInstance = (
<div>
  header
</div>
);

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div style={headerStyle}>
            header
          </div>
        );
    }
}
