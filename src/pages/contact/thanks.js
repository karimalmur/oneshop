import React from "react"
import { css } from "@emotion/core"

import Layout from "../../components/Layout"

export default () => (
  <Layout>
    <section
      css={css`
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      `}
    >
      <h1>Thank you!</h1>
      <p>We'll get back to you soon.</p>
    </section>
  </Layout>
)
