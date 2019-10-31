import React, { useState, useRef } from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import { css } from "@emotion/core"

import Footer from "../components/Footer"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
import useSiteMetadata from "./SiteMetadata"
import Theme from "../theme"
import { useOnClickOutside } from "../hooks"
import { rhythm } from "../utils/typography"
import Navbar from "./Navbar"

export const MenuContext = React.createContext()

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [menuOpen, setMenuOpen] = useState(false)

  // Handle clicks outside of the menu
  const node = useRef()
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <MenuContext.Provider
      value={{ menuOpen, setMenuOpen }}
    >
      <ThemeProvider theme={Theme}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
          />
        </Helmet>
        <div
          css={css`
            position: relative;
            height: 100%;
            width: 100%;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              min-height: 100%;
            `}
          >
            <div
              css={css`
                min-height: 100%;
                padding: 0;
                position: relative;
              `}
            >
              <Navbar />
              <main
                css={css`
                  padding: 0 ${rhythm(1)};
                  padding-bottom: ${rhythm(2)};
                  max-width: 960px;
                  margin: 0 auto;
                `}
              >
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
        <div
          css={css`
            bottom: 0;
            opacity: ${menuOpen ? .5 : 0};
            pointer-events: auto;
            background-color: #000;
            display: ${menuOpen ? "block" : "none"};
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            position: fixed;
            z-index: 0;
          `}
        />
        <div
          ref={node}
          css={css`
            z-index: 10;
          `}
        >
          <Burger />
          <Menu />
        </div>

      </ThemeProvider>
    </MenuContext.Provider>
  )
}

export default TemplateWrapper
