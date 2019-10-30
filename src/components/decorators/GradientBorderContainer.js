import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"

export default (props) => (
  <div
    className="gb-wrapper"
    {...props}
  >
    <div
      css={ theme => (css`
        display: inline-block;
        max-width: 22rem;
        position: relative;
        padding: ${rhythm(0.15)};
        box-sizing: border-box;
        color: #fff;
        background: #000;
        background-clip: padding-box;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          margin: -3px;
          background: linear-gradient(to top right, ${theme.themeColor}, ${theme.themeAccent});
        }
      `)}
    >
      {props.children}
    </div>
  </div>
)
