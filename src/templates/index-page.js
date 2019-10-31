import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { useMediaQuery } from "react-responsive"

import { scale, rhythm } from "../utils/typography"
import GradientBorderContainer from "../components/decorators/GradientBorderContainer";
import Layout from "../components/Layout"
import Button from "../components/Button"
import UnderlinedPrimaryLink from "../components/decorators/UnderlinedPrimaryLink"

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
    description,
  } = props

  const wideScreen = useMediaQuery({ query: "(min-device-width: 760px)" })

  return(
    <>
      <Logo title={siteTitle} />
      <div
        css={css`
          display: flex;
          flex-direction: ${wideScreen ? "row" : "column"};
        `}
      >
        <section
          css={css`
            margin-top: ${rhythm(wideScreen ? 2 : 1)};
            margin-right: ${rhythm(2)};
            padding-right: ${rhythm(.5)};
            flex: 1;
            border-right: ${ wideScreen ? "1px dotted #fff5" : "none"};
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
            margin-top: ${rhythm(wideScreen ? 2 : 1)};
            flex: 1;
            display: flex;
            flex-direction: ${wideScreen ? "column" : "row"};
            justify-content: center;
          `}
        >
          { wideScreen && <>
            <Button
              to="/contact"
              css={css`
                margin-right: ${rhythm(1)};
                margin-top: ${rhythm(.5)};
                max-width: 340px;
              `}
            >
              Hire Us
            </Button>
            <Button
              to="/projects"
              css={css`
                margin-right: ${rhythm(1)};
                margin-top: ${rhythm(.5)};
                max-width: 340px;
              `}
            >
              See Out Projects
            </Button>
          </>}

          { !wideScreen && <>
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
          </>}
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
    <Layout>
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

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
