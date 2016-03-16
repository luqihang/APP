import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const styles = {
    textAlign: 'center',
    // position: 'absolute',
    // width: '100%',
    // bottom: 0,
    flex: '0',
    height: '50px',
    lineHeight: '50px',
}

const footerInstance = (
  <footer style={styles}>
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
