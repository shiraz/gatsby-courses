import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const blog = ({data}) => {
  return (
    <Layout>
      hello from blog page<Link to="/">back home</Link>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>author: {data.site.siteMetadata.author}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
        siteMetadata {
            title
            author
        }
    }
  }  
`

export default blog
