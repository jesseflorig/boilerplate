import React from 'react'
import styled from 'react-emotion'

const H1 = styled('h1')`
  color: blue;
`

function Title({ children }) {
  return (
    <H1>{ children }</H1>
  )
}

export default Title
