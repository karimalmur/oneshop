import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
import useSiteMetadata from "./SiteMetadata"
import { withPrefix } from "gatsby"
import Theme from "../theme"
import { ThemeProvider } from "emotion-theming"

export const MenuContext = React.createContext()

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <MenuContext.Provider
      value={{ menuOpen, setMenuOpen }}
    >
      <ThemeProvider theme={Theme}>
        <div>
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
          <Burger />
          <Menu />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </MenuContext.Provider>
  )
}

export default TemplateWrapper
