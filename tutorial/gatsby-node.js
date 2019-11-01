exports.createPages = async ({actions, graphql}) => {
    const path = require('path')
    
    const { createPage } = actions;
    const { data } = await graphql(`
    query {
        tours:allContentfulTour {
          edges{
            node {
              slug
            }
          }
        }
      }
    `)
    data.tours.edges.forEach((node) => {
        createPage( {
            path: `tours/${node.slug}`,
            component: path.resolve('./src/templates/tour-template.js'),
            context: {
                slug: node.string
            }
        })
    })
}