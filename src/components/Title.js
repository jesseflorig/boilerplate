import React, { Component } from 'react'
import styled from 'react-emotion'

const H1 = styled('h1')`
  color: blue;
`

export default class Title extends Component {
  render () {
    return <H1>{this.props.children}</H1>
  }
}
