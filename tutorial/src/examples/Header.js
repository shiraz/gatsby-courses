import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const Header = () => {
    const {site: {siteMetadata: info}} = useStaticQuery(graphql`
    {
        site {
          siteMetadata {
            title
            author
            data {
              age
            }
          }
        }
      }
    `)

    return (
        <div>
            <h1>author: {info.author}</h1>
            <h2>title: {info.title}</h2>
        </div>
    )
}

export default Header
