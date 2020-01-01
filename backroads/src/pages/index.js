import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import About from '../components/Home/About'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'

export default ({ data }) => (

  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title='continue exploring'
        info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis.'
      >
        <Link to='/tours' className='btn-white'>
          explore tours
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
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