import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../components/Layout/layout'

import styles from '../css/postTemplate.module.css'

const PostTemplate = ({data}) => {
    const { title, date, author, image } = data.mdx.frontmatter
    const { body } = data.mdx
    const img = image.childImageSharp.fluid

    return (
        <Layout>
          <section className={styles.template}>
            <Link to="/" className={styles.link}>
              back to all posts
            </Link>
            <div className={styles.info}>
              <h1>{title}</h1>
              <h4>
                <span>by {author}</span> / <span>{date}</span>
              </h4>
            </div>
            <Image fluid={img} />
            <div className={styles.content}>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </section>
        </Layout>
      )
}

export const query = graphql`
query getPost($slug: String !) {
    mdx(frontmatter: { slug: { eq:$slug }}) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
}
`

export default PostTemplate