require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    description: 'Explore awesome tours worldwide & discover what makes each of them unique. Forget your daily routine, and say yes to adventure.',
    author: '@johndoe',
    twitterUsername: "@john.doe",
    image: '/defaultBcg.jpeg',
    siteUrl: 'https://www.google.com'

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.BACKROADS_SPACE_ID,
        accessToken: process.env.BACKROADS_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`
  ],
}
