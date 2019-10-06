import React, { Component } from "react"
import { Link } from "gatsby"

export default class blog extends Component {
  render() {
    return (
      <div>
        <p>This is our blog page</p>
        <div>
          <Link to="/">Home Page</Link>
        </div>
      </div>
    )
  }
}
