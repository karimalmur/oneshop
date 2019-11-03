import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from "@emotion/core"

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/seo'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section
      css={css`
        max-width: 960px;
        margin: 0 auto;
      `}
    >
      <h2>
        {title}
      </h2>
      <PageContent className="content" content={content} />
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      css={css`
        margin: 0 auto;
        text-align: center;
      `}
    >
      <SEO title="About Us"/>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
