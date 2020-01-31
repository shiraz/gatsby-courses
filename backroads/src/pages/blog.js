import React from 'react'
import { graphql } from 'gatsby'

import BlogList from '../components/Blog/BlogList'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import StyledHero from '../components/StyledHero'

const blog = ( {data} ) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg:file(relativePath:{eq:"blogBcg.jpeg"}) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
