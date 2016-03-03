import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const headerStyle = {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
}

const footerInstance = (
  <footer style={headerStyle}>
    lqh_2012@live.cn 苏州科技学院2012级计算机科学与技术
  </footer>
);

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return footerInstance;
    }
}
