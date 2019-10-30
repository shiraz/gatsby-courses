import React from 'react'
import { graphql } from 'gatsby'

import Tours from '../components/Tours/Tours'
import Layout from '../components/layout'

const tours = ( {data} ) => {
    return (
        <Layout>
            hello from tours
            <Tours tours={data.tours.edges} />
        </Layout>
    )
}

export const getTours = graphql`
query {
    tours:allContentfulTour {
      edges{
        node{
          name
          country
          id:contentful_id
          days
          images{
            fluid{
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours
