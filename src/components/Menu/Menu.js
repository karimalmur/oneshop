import React, { useContext } from "react"
import { css } from "@emotion/core"

import { scale, rhythm } from "../../utils/typography"
import { MenuContext } from "../Layout"
import arrowPic from "../../assets/right-arrow.svg"
import PrimaryLink from "../decorators/PrimaryLink"
import SmallLogo from "../Logo/SmallLogo"

const MenuItem = ({ children, to }) => (
  <PrimaryLink
    css={{
      paddingRight: rhythm(0.7),
      paddingBottom: rhythm(1),
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      ...scale(1)
    }}
    to={to}
    inverted
  >
    <img
      src={arrowPic}
      alt="menu item"
      width="28px"
      height="28px"
      css={css`
        margin-bottom: 0;
        margin-right: ${rhythm(1)};
      `}/>
    {children}
  </PrimaryLink>
)

export default () => {
  const { menuOpen } = useContext(MenuContext)

  return (
    <nav
      css={ theme => ({
        backgroundColor: theme.secondaryDark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        minHeight: "100vh",
        textAlign: "left",
        transition: "transform 0.3s ease-in-out",
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        padding: rhythm(1.5),
        position: "absolute",
        zIndex: 2,
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
        <MenuItem to="/projects">Our Work</MenuItem>
        <MenuItem to="/about">About Us</MenuItem>
        <MenuItem to="/contact">Hire Us</MenuItem>
      </div>
    </nav>
  )
}
