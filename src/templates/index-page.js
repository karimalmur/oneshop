import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { css } from "@emotion/core"

import { scale, rhythm } from "../utils/typography"
import Layout from "../components/Layout"
import UnderlinedPrimaryLink from "../components/decorators/UnderlinedPrimaryLink"

export const IndexPageTemplate = (props) => {
  const {
    siteTitle,
    description,
  } = props

  return(
    <>
      <div
        css={css`
          margin-top: ${rhythm(1)};
          display: flex;
          flex-direction: column;
        `}
      >
        <section
          css={css`
            margin-right: ${rhythm(2)};
            padding-right: ${rhythm(.9)};
            flex: 1;
          `}
        >
          <h1
            css={css`
              transition-delay: 200ms;
            `}
          >
            This is {siteTitle}.
          </h1>

          <h2
            css={css`
              max-width: ${rhythm(20)};
              ${scale(.1)}
            `}
          >
            {description}
          </h2>
        </section>
        <section
          css={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
        >
          <UnderlinedPrimaryLink
            to="/contact"
            css={css`
              margin-right: ${rhythm(1)};
              margin-top: ${rhythm(.5)};
              max-width: 340px;
            `}
            permanent
            inverted
          >
            Hire Us
          </UnderlinedPrimaryLink>
          <UnderlinedPrimaryLink
            to="/projects"
            css={css`
              margin-right: ${rhythm(1)};
              margin-top: ${rhythm(.5)};
              max-width: 340px;
            `}
            permanent
            inverted
          >
            See Out Projects
          </UnderlinedPrimaryLink>
        </section>
      </div>
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
    <Layout
      css={css`
        main {
          padding: 0 ${rhythm(1)};
          padding-bottom: ${rhythm(2)};
          max-width: 960px;
          margin: 0 auto;
        }
      `}
    >
      <IndexPageTemplate
        siteTitle={site.siteMetadata.title}
        description={site.siteMetadata.description}
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

export default (props) => (
  <StaticQuery query={graphql`
    query IndexPageTemplate {
      site {
        siteMetadata {
          title
          description
        }
      }
    }`}
    render={(data) => <IndexPage data={data} {...props}/>}
  />
)