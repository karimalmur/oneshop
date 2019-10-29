import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Theme from "../../theme"

export default (props) => (
  <Link
    css={css`
      color: ${Theme.themeColor};
    `}
    {...props}
  >
    {props.children}
  </Link>
)