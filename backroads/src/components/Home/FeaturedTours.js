import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Title from '../Title'
import { Tour } from '../Tours/Tour'

import styles from '../../css/items.module.css'

const getFeaturedTours = graphql`
query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
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

export const FeaturedTours = () => {

    const response = useStaticQuery(getFeaturedTours)
    const tours = response.featuredTours.edges

    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="tours" />
            <AniLink fade to="/tours" className="btn-primary">all tours</AniLink>
            <div className={styles.center}>
                {tours.map(({node}) => {
                    return <Tour key={node.contentful_id} tour={node} />
                })}
            </div>

        </section>
    )
}
