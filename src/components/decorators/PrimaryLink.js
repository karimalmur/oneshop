import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Theme from "../../theme"

export default (props) => {
  const { children, inverted } = props
  const color = inverted ? Theme.textNormal : Theme.themeColor
  const hoverColorProperties = inverted ?
    css`
      &:hover {
        background: linear-gradient(to top left, ${Theme.themeColor}, ${Theme.themeAccent});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `
    : css`color: white;`

  return (
    <Link
      css={{
        color: color,
        "&:hover": hoverColorProperties,
      }}
      {...props}
    >
      {children}
    </Link>
  )
}