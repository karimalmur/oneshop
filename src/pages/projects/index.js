import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Projects, { ProjectsContext } from "../../components/projects"
import Layout from "../../components/Layout"
import { rhythm } from "../../utils/typography"

const ProjectIndex = ({ data }) => {
  const projects = data["projects"].edges
  const currentProject = projects[0].node

  return (
    <ProjectsContext.Provider
      value={{ projects, currentProject }}
    >
      <Layout
        burgerSpacing={rhythm(.5)}
        css={css`
          nav {
            padding-top: ${rhythm(.4)};
            padding-bottom: ${rhythm(.4)};
          }
        `}
      >
        <Projects detailedView={false} />
      </Layout>
    </ProjectsContext.Provider>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } },
      sort: {fields: [frontmatter___rank], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tech
            github
            external
            rank
          }
          fields {
            slug
          }
          html
          fileAbsolutePath
          excerpt
        }
      }
    }
  }
`

ProjectIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
}