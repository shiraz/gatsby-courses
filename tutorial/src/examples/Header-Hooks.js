import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query SecondQuery {
        site {
          siteMetadata {
            siteTitle:title
            description
            author
            data {
              age
            }
          }
        }
      }
    `

const Header = () => {
    const {site: {siteMetadata: info}} = useStaticQuery(getData)

    return (
        <div>
            <h1>author: {info.author}</h1>
            <h2>title: {info.siteTitle}</h2>
        </div>
    )
}

export default Header
