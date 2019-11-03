import React, { useContext } from "react"
import { rhythm } from "../utils/typography"

import { MenuContext } from "./Layout"

export default ({ spacing }) => {
  spacing = spacing ? spacing : rhythm(1.4)
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  return (
    <button
      onClick={() =>
        setMenuOpen(!menuOpen)
      }

      css={ theme => ({
        position: "absolute",
        top: spacing,
        left: spacing,
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
          width: "1.4rem",
          height: "0.1rem",
          background: theme.primaryLight,
          transition: "all 0.3s linear",
          position: "relative",
          transformOrigin: 1,

          "&:first-of-type": {
            transform: menuOpen ? "rotate(45deg)" : "rotate(0)",
          },

          ":nth-of-type(2)": {
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? "translateX(20px)" : "translateX(0)",
          },

          ":nth-of-type(3)": {
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
