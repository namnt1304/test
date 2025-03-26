import React, { Component } from 'react'
import { connect } from 'react-redux'

export class test7 extends Component {
  render() {
    return (
      <div>test7</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(test7)