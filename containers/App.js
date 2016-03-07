import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'



import './App.less'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange(nextValue) {
    this.props.pushState(null, `/${nextValue}`)
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
      <Grid fluid id='app'>
        <Row>
          <Header className='header' />
        </Row>
        <Row className='view view-sidebar-full'>
          <div className='view-sidebar'>
            <div className='sidebar'>
              <div className='sidebar-icon sidebar-fold'></div>

              <div className='sidebar-nav sidebar-main sidebar-fold'>
                <div className='sidebar-title'>
                  <span className='sidebar-title-icon'>**</span>
                  <span className='sidebar-title-text'>产品与服务</span>
                  <span className='sidebar-manage'>设置</span>
                </div>
                <ul className='sidebar-trans'>
                  <li className='nav-item'>
                    <span className='nav-icon'>icon</span>
                    <span className='nav-title'>组件管理</span>
                  </li>
                  <li className='nav-item active'>

                  </li>
                  <li className='nav-item'>

                  </li>
                </ul>
              </div>

              <div className='sidebar-nav sidebar-main sidebar-fold'>
                <div className='sidebar-title'>
                  <span className='sidebar-title-icon'></span>
                  <span className='sidebar-title-text'>产品与服务</span>
                  <span className='sidebar-manage'></span>
                </div>
              </div>


            </div>
          </div>
          <div className='view-main view-main-full'>
            <div className="view-main-navbar">
            </div>
            <div className="view-main-body">
            </div>
          </div>
        </Row>
        <SideMenu />
        <Explore value={inputValue}
                 onChange={this.handleChange} />
        <hr />
        {this.renderErrorMessage()}
        {children}
        <Footer />
      </Grid>

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
