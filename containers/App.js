import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'

import './App.less'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { SideNav, Nav } from '../components/SideNav'

var navi = [
    { id: 'home', icon: 'fa fa-dashboard' , text: '首页'},
    { id: 'app', icon: 'fa fa-cube', text: '我的APP' ,
        navlist: [
          { icon: 'fa fa-desktop', id: 'manage' ,text: 'Manage Product' },
          { icon: 'fa fa-cog', id: 'suppliers' ,text: 'Suppliers' }
        ]
    },
    { id: 'component', icon: 'fa fa-database' ,text: '组件市场'},
    { id: 'data', icon: 'fa fa-truck' ,text: '数据管理'},
    { id: 'about', icon: 'fa fa-bar-chart' ,text: '关于' }
];


class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
    this.handleNavSelection = this.handleNavSelection.bind(this)

    this.state = {};
    this.state.selected = 'home';
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange(nextValue) {
    selected = e.id;
    this.props.pushState(null, `/${selected}`)
  }

  handleNavSelection(nav) {
    const selected = nav.id;
    this.setState({
      selected: selected
    });
    console.log(`/${selected}`);
    this.props.pushState(null, `/${selected}`)
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <div id='app'>
        <Header className='header' />
        <div className='view'>
          <div className="view-sidebar">
            <div style={{width:180}}>
              <SideNav navtype='icon-left' selected={this.state.selected} navs={navi} onSelection={this.handleNavSelection}/>
            </div>
          </div>


          <div className='view-main'>
            <div className="view-main-navbar">
            </div>
            <div className="view-main-body">
              {children}
            </div>
          </div>
          {this.renderErrorMessage()}

        </div>

      </div>

    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState
})(App)
