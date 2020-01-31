import React from 'react'
import { graphql } from 'gatsby'

import Contact from '../components/Contact/Contact'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import StyledHero from '../components/StyledHero'

const contact = ( {data} ) => {
  return <Layout>
    <SEO title="Contact" />
    <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    <Contact />
  </Layout>
}

export const query = graphql`
  query {
    contactBcg:file(relativePath:{eq:"connectBcg.jpeg"}) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact