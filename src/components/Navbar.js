import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import GradientBorderContainer from "./decorators/GradientBorderContainer";
import { css } from "@emotion/core"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        css={css`
          background: transparent;
        `}
      >
        <div className="container">
          <div
            className="navbar-brand"
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
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </nav>
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
      <Navbar title={data.site.siteMetadata.title} />
    )}
  />
)
