/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'tutorial',
    description: 'just some description about our site',
    author: '@johndoe',
    data: {
      name: 'john',
      age: 25
    }
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`]
}
