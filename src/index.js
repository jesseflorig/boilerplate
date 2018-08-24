import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'

const rootElement = document.getElementById('root')
const Title = styled('h1')`
  color: red;
`

const App = () => {
  return <Title>Hello Boilerplate!</Title>
}

ReactDOM.render(<App />, rootElement)
