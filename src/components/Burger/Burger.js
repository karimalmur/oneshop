import React, { useContext } from "react"
import { rhythm } from "../../utils/typography"

import { MenuContext } from "../Layout"

export default () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  return (
    <button
      onClick={() =>
        setMenuOpen(!menuOpen)
      }

      css={ theme => ({
        position: "absolute",
        top: rhythm(1.4),
        left: rhythm(1.4),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "1.1rem",
        height: "1.4rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
        zIndex: 10,

        "&:focus": {
          outline: "none"
        },

        div: {
          width: "1.7rem",
          height: "0.17rem",
          background: theme.primaryLight,
          transition: "all 0.3s linear",
          position: "relative",
          transformOrigin: 4,

          ":first-child": {
            transform: menuOpen ? "rotate(45deg)" : "rotate(0)",
          },

          ":nth-child(2)": {
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? "translateX(20px)" : "translateX(0)",
          },

          ":nth-child(3)": {
            transform: menuOpen ? "rotate(-45deg)" : "rotate(0)",
          },
        }
      })}
    >
      <div />
      <div />
      <div />
    </button>
  )
}
