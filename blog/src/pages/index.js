import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
 
import { Layout } from '../components/Layout/layout'
import { PostList } from '../components/PostList/PostList'

const getPosts = graphql`
{
	allMdx(sort:{fields:frontmatter___date,order:DESC}) {
    edges {
      node {
  			frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          author
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default () => {
    const response = useStaticQuery(getPosts)
    const posts = response.allMdx.edges
    return (
        <Layout>
            <PostList posts={posts}/>
        </Layout>
    )

}
