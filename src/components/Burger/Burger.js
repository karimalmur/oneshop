import React from "react"
import { rhythm } from "../../utils/typography";

export default () => (
  <button
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
        width: "2rem",
        height: "0.2rem",
        background: theme.primaryLight,
        borderRadius: 0,
        transition: "all 0.3s linear",
        position: "relative",
        transformOrigin: 1,
      }
    })}
  >
    <div />
    <div />
    <div />
  </button>
)
