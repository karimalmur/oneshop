import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { scale, rhythm } from "../utils/typography"

import GradientBorderContainer from "../components/decorators/GradientBorderContainer";
import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"

const Logo = (props) => (
  <GradientBorderContainer
    css={css`
      text-align: center;
      margin-top: ${rhythm(1.3)};
      margin-bottom: ${rhythm(1.3)};

      div {
        margin: 0 auto;

        &:hover {
          background-color: #0005;
        }
      }
    `}
    {...props}
  >
    <Link to="/" className="navbar-item" title="Logo">
      <h1
        css={{
          textShadow: "none",
          color: "white",
          borderBottom: "none",
          marginTop: 0,
          marginBottom: 0,
          ...scale(0.05),

        }}
        {...props}
      >
        {props.title}
      </h1>
    </Link>
  </GradientBorderContainer>
)

export const IndexPageTemplate = (props) => {
  const {
    image,
    siteTitle,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  } = props

  return(
    <div>
      <Logo title={siteTitle} />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  siteTitle: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  })
}

const IndexPage = ({ data }) => {
  const { site } = data
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        siteTitle={site.siteMetadata.title}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
