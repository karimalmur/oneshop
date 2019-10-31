import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Button = (props) => (
  <div
    css={theme => (css`
      border-radius: 3px;
      border: 1px solid ${theme.themeColor};
      position: relative;
      text-align: center;

      &:hover {
        background: #fff5;
        cursor: pointer;
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
        font-weight: 700;
        padding: ${rhythm(.8)};
        text-transform: uppercase;
      }
    `)}

    {...props}
  >
    <Link to={props.to}>{props.children}</Link>
  </div>
)

export default Button