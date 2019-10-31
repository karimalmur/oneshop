import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Theme from "../../theme"

const PrimaryLink = (props) => {
  const {children, inverted, ...linkProps} = props
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
        fontWeight: 700,
        "&:hover": hoverColorProperties,
      }}
      {...linkProps}
    >
      {children}
    </Link>
  )
}

export default PrimaryLink

PrimaryLink.propTypes = {
  inverted: PropTypes.bool,
}
