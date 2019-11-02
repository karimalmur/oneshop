import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../../components/Layout"
import IconGithub from "../../components/icons/github"
import IconExternal from "../../components/icons/external"
import { scale, rhythm } from "../../utils/typography"

const BoxShadow = css`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`

const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 3px;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  @media (min-width: 760px) {
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  }
`

const ImgContainer = styled.a`
  ${BoxShadow};
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.themeAccent};
  border-radius: 3px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  div {
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: rgba(2, 12, 27, 0.7);
    mix-blend-mode: screen;
  }
`;

const inlineLink = css`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  color: ${props => props.theme.themeColor};
  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.themeColor};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${props => props.theme.themeColor};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0.5;
  }
`

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-grow: 1;
  width: 100%;
  max-height: 82.5vh;
  position: relative;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`

const ProjectListContainer = styled.div`
  position: relative;
  overflow-y: scroll;

  ::-webkit-scrollbar
  {
    width: 12px;  /* for vertical scrollbars */
    height: 12px; /* for horizontal scrollbars */
  }

  ::-webkit-scrollbar-track
  {
    background-color: rgba(2, 12, 27, 0.7);
  }

  ::-webkit-scrollbar-thumb
  {
    background: ${props => props.theme.themeColor};
  }

  border: ${props => `1px solid ${props.theme.themeColor}`};
  @media (min-width: 850px) {
    flex: 0 0 300px;
    margin-top: 0;
    overflow-y: scroll;
  }
`

const ProjectList = styled.div`
  @media (min-width: 850px) {
    background-color: rgba(2, 12, 27, 0.7);
    padding-right: 1px;
  }
`

const ProjectListHeader = styled.div`
  align-items: center;
  border-bottom: rgba(2, 12, 27, 0.7);
  display: flex;
  height: 60px;
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
`

const ProjectInner = styled.div`
  ${BoxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: ${rhythm(.5)};
  border-radius: 3;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: ${props => props.current ? props.theme.primaryHover : "rgba(2, 12, 27, 0.7)"};
  height: 100%;

  &:hover {
    background-color: ${props => props.clickable && props.theme.primaryHover};
    cursor: ${props => props.clickable ? "pointer" : "inherit"};
  }
`;

const Project = styled.div`
  cursor: default;
  margin-bottom: 2px;
  display: block;

  p:hover {
    color: #FFF;
  }
`;

const Links = styled.div`
  display: inline-block;
  justify-content: center;
  margin-left: ${rhythm(.1)};
  color: ${props => props.theme.themeAccent};
`;

const IconLink = styled.a`
  position: relative;
  padding: 10px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const ProjectName = styled.h5`
  display: inline-block;
  margin: ${rhythm(.1)};
  color: ${props => props.theme.themeAccent};
  ${scale(.1)}
`;

const ProjectDescription = styled.div`
  ${scale(-.5)};
  margin: ${rhythm(.2)};
  color: #FFFB;
  a {
    ${inlineLink}
  }
  p {
    margin: 0;
  }
`;

const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: ${rhythm(.1)};
  margin-left: ${rhythm(.25)};
  margin-bottom: 0;
  list-style: none;
  li {
    color: ${props => props.theme.themeColor};
    line-height: 1.75;
    margin-right: 15px;
    margin-bottom: ${rhythm(.1)};
    &:last-of-type {
      margin-right: 0;
    }
    ${scale(-.5)}
  }
`;

const Projects = ({ projects, currentProject }) => {
  return (
    <ProjectListContainer>
      <ProjectList>
        <ProjectListHeader>Our Projects</ProjectListHeader>
        {projects.map(({ node }, i) => {
          const { frontmatter, excerpt, fields } = node;
          const { github, external, title, tech } = frontmatter;
          const { slug } = fields
          const path = `/projects${slug}`

          return (
            <Link to={path}>
              <Project
                key={i}
                tabIndex="0"
              >
                <ProjectInner clickable current={node === currentProject}>
                  <header>
                    <ProjectName>{title}</ProjectName>
                    <Links>
                      {github && (
                        <IconLink
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Github Link">
                          <IconGithub />
                        </IconLink>
                      )}
                      {external && (
                        <IconLink
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                          <IconExternal />
                        </IconLink>
                      )}
                    </Links>
                    <ProjectDescription dangerouslySetInnerHTML={{ __html: excerpt }} />
                  </header>
                  <footer
                    css={css`
                      background-color: rgba(0, 0, 0, 0.4);
                      width: 100%;
                    `}
                  >
                    <TechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                        ))}
                    </TechList>
                  </footer>
                </ProjectInner>
              </Project>
            </Link>
          );
        })}
      </ProjectList>
    </ProjectListContainer>
  )
}

const CurrentProjectContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border: ${props => `1px solid ${props.theme.themeColor}`};
  border-left: none;
`

const CurrentProject = ({ project }) => { 
  const { frontmatter, html } = project
  const { github, external, title, tech, image } = frontmatter

  return (
    <CurrentProjectContainer>
      <ProjectInner>
        <header>
          <ProjectName>{title}</ProjectName>
          <Links>
            {github && (
              <IconLink
                href={github}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Github Link">
                <IconGithub />
              </IconLink>
            )}
            {external && (
              <IconLink
                href={external}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link">
                <IconExternal />
              </IconLink>
            )}
          </Links>
          <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
        </header>
        <ImgContainer
          href={external ? external : github ? github : '#'}
          target="_blank"
          rel="nofollow noopener noreferrer">
          <FeaturedImg fluid={image.childImageSharp.fluid} />
        </ImgContainer>
        <footer
          css={css`
            background-color: rgba(0, 0, 0, 0.4);
            width: 100%;
          `}
        >
          <TechList>
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
              ))}
          </TechList>
        </footer>
      </ProjectInner>
    </CurrentProjectContainer>
  )
}

const ProjectIndex = ({ data }) => {
  const projects = data["projects"].edges
  const currentProject = projects[0].node

  return (
    <Layout
      wide
      burgerSpacing={rhythm(.5)}

      css={css`
        nav {
          padding-top: ${rhythm(.4)};
          padding-bottom: ${rhythm(.4)};
        }
      `}
    >
      <ProjectsContainer>
        <Projects currentProject={currentProject} projects={projects} />
        <CurrentProject project={currentProject}/>
      </ProjectsContainer>
    </Layout>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } },
      sort: {fields: [frontmatter___rank], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tech
            github
            external
            rank
          }
          fields {
            slug
          }
          html
          fileAbsolutePath
          excerpt
        }
      }
    }
  }
`

ProjectIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
}