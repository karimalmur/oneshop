import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { scale, rhythm } from "../utils/typography"

import GradientBorderContainer from "../components/decorators/GradientBorderContainer";
import Layout from "../components/Layout"

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
    siteTitle,
  } = props

  return(
    <>
      <Logo title={siteTitle} />
      <main>
        <section className="intro">
          <h1
            css={css`
              transition-delay: 200ms;
            `}
          >
            This is {siteTitle}.
          </h1>
        </section>
      </main>
    </>
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

  return (
    <Layout>
      <IndexPageTemplate
        siteTitle={site.siteMetadata.title}
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
  }
`
