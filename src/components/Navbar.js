import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

const Navbar = class extends React.Component {

  render() {
    return (
      <nav
        role="navigation"
        aria-label="main-navigation"
        css={css`
          padding: ${rhythm(0.4)};
          position: absolute;
          top: 0;
          padding: ${rhythm(1)}
        `}
      >
        <Burger />
        <Menu />
        <div
          className="navbar-brand"
          css={css`
            a {
              background-image: none;
            }
          `}
        >
          
        </div>
      </nav>
    );
  }
};

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
