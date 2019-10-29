import React from "react"
import { storiesOf } from "@storybook/react"
import { scale } from "../utils/typography";
import { Link } from "gatsby";

export default {
  title: 'Menu',
};

export const menu = () => (
  <nav
    css={ theme => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: theme.primaryLight,
      textAlign: "left",
      padding: "2rem",
      position: "absolute",
      top: 0,
      left: 0,
      transition: "transform 0.3s ease-in-out",

      [`@media (max-width: ${theme.mobile})`]: {
        textAlign: "center",
        ...scale(1.5)
      },

      "&:hover": {
        color: theme.primary
      }
    })}
  >
    <Link to="about" />
    <Link to="projects" />
    <Link to="contact" />
  </nav>
)
