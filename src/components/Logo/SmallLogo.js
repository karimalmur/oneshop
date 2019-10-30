import React from "react"

import { rhythm, scale } from "../../utils/typography"
import UnderlinedPrimaryLink from "../decorators/UnderlinedPrimaryLink"

const SmallLogo = (props) => (
  <div
    css={{
      textAlign: "center",
      padding: rhythm(0.5),
    }}
    {...props}
  >
    <UnderlinedPrimaryLink to="/" title="Logo">
      <h1
        css={theme => ({
          textAlign: "center",
          marginTop: "52px",
          marginBottom: "52px",
          display: "inline-block",
          background: `linear-gradient(to top right, ${theme.themeColor}, ${theme.themeAccent})`,
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          ...scale(0.5),
        })}
        {...props}
      >
        os
      </h1>
    </UnderlinedPrimaryLink>
  </div>
)

export default SmallLogo