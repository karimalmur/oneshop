import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../../components/Layout"
import IconGithub from "../../components/icons/github"
import IconExternal from "../../components/icons/external"
import { scale, rhythm } from "../../utils/typography"

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

const BoxShadow = css`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`

const ProjectsContainer = styled.section`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 80vh;
  width: 100%;
  position: relative;
`

const ProjectListContainer = styled.div`
  position: relative;
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
    height: 80vh;
    overflow-y: scroll;
  }
`

const ProjectList = styled.div`
  height: auto;
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
  height: 100%;
  border-radius: 3;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: rgba(2, 12, 27, 0.7);

  &:hover {
    background: rgba(2, 12, 27, 0.9);
    cursor: pointer;
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
  text-align: center;
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
  margin-bottom: 0;
  margin-left: 0;
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

const Projects = ({ projects }) => (
  <ProjectsContainer>
    <ProjectListContainer>
      <ProjectList>
        <ProjectListHeader>Our Projects</ProjectListHeader>
        {projects.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { github, external, title, tech } = frontmatter;
          return (
            <Project
              key={i}
              tabIndex="0"
            >
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
                <footer>
                  <TechList>
                    {tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </TechList>
                </footer>
              </ProjectInner>
            </Project>
          );
        })}
      </ProjectList>
    </ProjectListContainer>
  </ProjectsContainer>
)

const ProjectIndex = ({ data }) => (
  <Layout>
    {console.log(data)}
    <Projects projects={data["projects"].edges}/>
  </Layout>
)

export default ProjectIndex

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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
          }
          html
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