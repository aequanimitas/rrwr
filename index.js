import 'babel-polyfill'
import React, {Component} from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() { return (<div>Hi!</div>) }
}

render(
  <App />,
  document.getElementById('root')
)
