import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

import '../components/blog.css'

export default class blog extends Component {
  render() {
    return (
      <Layout><h1 className="blog-title">This is our blog page</h1></Layout>
    )
  }
}
