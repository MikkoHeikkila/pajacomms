const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            wordpress_id
            path
            status
            template
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            wordpress_id
            path
            status
            template
            format
            slug
          }
        }
      }
      allWordpressWpReference {
        edges {
          node {
            id
            wordpress_id           
            title
            date
            slug
            status
            type
            content
            excerpt
            categories {
              name
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost, allWordpressWpReference } = result.data

  // Create Page pages.
  const defaultPageTemplate = slash(path.resolve(`./src/templates/page.js`))
  var fs = require('fs');

  // Used to check if a template exists
  function fileExists(filePath)
  {
      try
      {
          return fs.statSync(filePath).isFile();
      }
      catch (err)
      {
          return false;
      }
  }

  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {

    // Get page template filename and remove .php from the end
    const templateName = (String(edge.node.template)).slice(0, edge.node.template.length-4) 
    // This would be the path for the custom Gatsby template
    var templatePath = path.resolve(`./src/templates/` + templateName + `.js`)
    // Check if this template exists
    if (!(fileExists(templatePath))) {
      templatePath = defaultPageTemplate; // If not, use the default template
    }

    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.slug,
      component: templatePath,
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Create Reference pages.
  const defaultReferenceTemplate = path.resolve(`./src/templates/reference.js`)

  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressWpReference.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    
    const path = 'palvelut/' + edge.node.slug

    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: path,
      component: slash(defaultReferenceTemplate),
      context: {
        id: edge.node.id,
        wordpress_id: edge.node.wordpress_id
      },
    })
    
  })
  

}