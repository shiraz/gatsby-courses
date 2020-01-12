import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import TourList from './TourList'

const getTours = graphql`
query {
    tours:allContentfulTour {
        edges {
            node {
                name
                price
                slug
                country
                contentful_id
                days
                images {
                    fluid {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`

export const Tours = () => {
    const { tours } = useStaticQuery(getTours)
    return <TourList tours={tours} />  
}
