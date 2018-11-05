import React, { Component } from 'react'

import Item from './Item'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends Component {
  render() {
    console.log(this.props)

    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="App-sec">
        <div className="App-Secondary">
          <ul>
            {this.props.data.items &&
              this.props.data.items.map((item, index) => {
                return (
                  <li key={index}>
                    <Item name={item.color} />
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}

const ITEMS_QUERY = gql`
  query ItemsQuery {
    items {
      color
    }
  }
`

export default graphql(ITEMS_QUERY)(App)
