import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql } from 'gatsby'

import About from '../components/Home/About'
import Banner from '../components/Banner'
import { FeaturedTours } from '../components/Home/FeaturedTours'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'

export default ({ data }) => (

  <Layout>
    <SEO title="Home" description="This is description" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`