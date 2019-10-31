import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { css } from "@emotion/core"

import { rhythm, scale } from "../utils/typography"
import GradientBorderContainer from "./decorators/GradientBorderContainer"

const Logo = (props) => (
  <GradientBorderContainer
    css={css`
      text-align: center;

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

const Navbar = ({ title }) => (
  <nav
    role="navigation"
    aria-label="main-navigation"
    css={css`
      padding-top: ${rhythm(1.3)};
      padding-bottom: ${rhythm(1.3)};
    `}
  >
    <Logo title={title} />
  </nav>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Navbar title={data.site.siteMetadata.title} />}
  />
);
