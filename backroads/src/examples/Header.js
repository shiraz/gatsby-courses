import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = useStaticQuery(graphql`
    query FirstQuery {
        site {
            siteMetadata {
                title
                author
            }
        }
    }           
`)

const { site:{siteMetadata: { title, author}} } = getSiteData;

const Header = () => {

    return (
        <div>
            <h1>title: {title}</h1>
            <h1>author: {author}</h1>
        </div>
    )
}

export default Header
