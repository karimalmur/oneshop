import React from "react";
import { css } from "@emotion/core";

export default ({ children }) => (
  <div
    css={css`
      display: flex;
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
        margin: auto;
        max-width: 22em;

        position: relative;
        padding: 0.5rem;
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
          background: linear-gradient(to right, red, orange);
        }
      `}
    >
      {children}
    </div>
  </div>
);
