
import React , { Component, PropTypes }  from 'react'

import { connect } from 'react-redux'

class AppManagerPage extends Component {

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
        121
      </div>
    );
  }

}

function mapStateToProps(state) {

  console.log(state);
  return {

  }
}

export default connect(mapStateToProps, {

})(AppManagerPage)
