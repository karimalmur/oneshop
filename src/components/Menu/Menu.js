import React, { useContext } from "react"
import { scale, rhythm } from "../../utils/typography"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { MenuContext } from "../Layout"

const SmallLogo = (props) => (
  <div
    css={{
      textAlign: "center",
      padding: rhythm(0.5),
    }}
    {...props}
  >
    <Link to="/" className="navbar-item" title="Logo">
      <h1
        css={theme => ({
          textAlign: "center",
          marginTop: "52px",
          marginBottom: "52px",
          display: "inline-block",
          background: `linear-gradient(to top left, ${theme.themeColor}, ${theme.themeAccent})`,
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          ...scale(0.5),
        })}
        {...props}
      >
        <span
          css={theme => ({
            color: theme.themeColor,
          })}>
            o
        </span>
        <span
          css={theme => ({
            color: theme.themeAccent,
          })}>
            s
        </span>
      </h1>
    </Link>
  </div>
)

const MenuItem = ({ children, to }) => (
  <Link
    css={{
      paddingRight: rhythm(0.7),
      paddingBottom: rhythm(1),
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      ...scale(1)
    }}
    to={to}
  >
    <img
      src="/img/right-arrow.svg"
      alt="menu item"
      width="28px"
      height="28px"
      css={css`
        margin-bottom: 0;
        margin-right: ${rhythm(1)};
      `}/>
    {children}
  </Link>
)

export default () => {
  const { menuOpen } = useContext(MenuContext)

  return (
    <nav
      css={ theme => ({
        backgroundColor: theme.secondaryDark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        textAlign: "left",
        transition: "transform 0.3s ease-in-out",
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        padding: rhythm(1.5),
        position: "absolute",
        top: 0,
        left: 0,
        [`@media (max-width: ${theme.mobile})`]: {
          textAlign: "center",
          ...scale(1.5)
        },
      })}
    >
      <SmallLogo />
      <div
        css={ theme => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "&:hover": {
            color: theme.primary
          }
        })}
      >
        <MenuItem to="projects">Our Work</MenuItem>
        <MenuItem to="about">About Us</MenuItem>
        <MenuItem to="contact">Contact Us</MenuItem>
      </div>
    </nav>
  )
}
