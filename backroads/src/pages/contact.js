import React from 'react'
import { graphql } from 'gatsby'

import Contact from '../components/Contact/Contact'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const contact = ( {data} ) => {
  return <Layout>
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