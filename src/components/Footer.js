import React from "react"
import { StaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import SmallLogo from "./Logo/SmallLogo"
import { rhythm } from "../utils/typography"
import PrimaryLink from "./decorators/PrimaryLink"

const SocialLink = styled(PrimaryLink)`
  padding: ${rhythm(.5)};
  svg {
    fill: white;
  }

  &:hover {
    transform: translateY(-3px);
    svg {
      fill: ${props => props.theme.themeColor};
    }
  }
`

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        css={theme => (css`
          position: absolute;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: ${rhythm(1)};
          padding-right: ${rhythm(1)};
          bottom: 0px;
          left: 0px;
          background: ${theme.secondaryDark};
          width: 100%;
        `)}
      >
        <SmallLogo
          title="Logo"

          css={(css`
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
              margin-top: 0;
              margin-bottom: 0;
              padding-bottom: ${rhythm(.15)};
            }
        `)}
        />
        <section
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <ul
            css={css`
              text-align: center;
              margin-bottom: 0;

              li {
                display: inline-block;
                margin-right: ${rhythm(1)};
                margin-bottom: 0;
              }
            `}
          >
            <li>
              <PrimaryLink to="/about" inverted>
                ABOUT
              </PrimaryLink>
            </li>
            <li>
              <PrimaryLink to="/products" inverted>
                PRODUCTS
              </PrimaryLink>
            </li>
            <li>
              <PrimaryLink to="/contact" inverted>
                CONTACT
              </PrimaryLink>
            </li>
          </ul>
        </section>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
        >
          <SocialLink
            title="facebook"
            to="https://facebook.com"
            inverted
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96.227 96.227"
              width={rhythm(.5)}
              height={rhythm(.5)}
              role="img"
              >
                <title>Facebook</title>
                <g><path d="M73.099,15.973l-9.058,0.004c-7.102,0-8.477,3.375-8.477,8.328v10.921h16.938l-0.006,17.106H55.564v43.895H37.897V52.332 h-14.77V35.226h14.77V22.612C37.897,7.972,46.84,0,59.9,0L73.1,0.021L73.099,15.973L73.099,15.973z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
            </svg>
          </SocialLink>

          <SocialLink
            title="twitter"
            to="https://twitter.com"
            inverted
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 612 612"
              width={rhythm(.5)}
              height={rhythm(.5)}
            >
              <title>Twitter</title>
              <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"></path>
            </svg>
          </SocialLink>
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
