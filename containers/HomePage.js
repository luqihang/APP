
import React , { Component, PropTypes }  from 'react'

import { Jumbotron , Button } from 'react-bootstrap'

import { connect } from 'react-redux'

class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>APP 在线制作管理平台 !</h1>
          <p>在这例你可以</p>
          <p><Button bsStyle="primary">了解更多</Button></p>
        </Jumbotron>
      </div>
    );
  }

}

function mapStateToProps(state) {

  return {

  }
}

export default connect(mapStateToProps, {

})(HomePage)
