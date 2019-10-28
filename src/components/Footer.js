import React from "react"
import { Link, StaticQuery } from "gatsby"
import { css } from "@emotion/core"

import GradientBorderContainer from "./decorators/GradientBorderContainer"
import facebook from "../img/social/facebook.svg"
import twitter from "../img/social/twitter.svg"

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div
          className="content has-text-centered"
          css={css`
              a {
                background-image: none;
              }
          `}
        >
        <Link
              to="/"
              className="navbar-item"
              title="Logo"
            >
              <GradientBorderContainer>
                <h1
                  css={css`
                    :hover {
                      color: white;
                    }

                    text-shadow: none;
                    color: white;
                    border-bottom: none;
                `}
                >
                  {this.props.title}
                </h1>
              </GradientBorderContainer>
            </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

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
    render={(data) => (
      <Footer title={data.site.siteMetadata.title} />
    )}
  />
)
