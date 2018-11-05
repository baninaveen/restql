import React, { Component } from 'react'
import yoga from './yoga.png'
import logo from './logo.svg'
import './App.css'
import Item from './Item'
import Color from './Color'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends Component {
  render() {
    console.log(this.props)

    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to <code>React App</code>
          </h1>
        </header>
        <div className="App-intro">
          <ul>
            {this.props.data.items &&
              this.props.data.items.map((item, index) => {
                return (
                  <li key={index}>
                    <Item name={item.name} />
                  </li>
                )
              })}
          </ul>
        </div>
        <div>
          <Color />
        </div>
      </div>
    )
  }
}

const ITEMS_QUERY = gql`
  query ItemsQuery {
    items {
      name
    }
  }
`

export default graphql(ITEMS_QUERY)(App)
