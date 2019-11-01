import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../../components/Layout"
import IconGithub from "../../components/icons/github"
import IconExternal from "../../components/icons/external"
import { scale } from "../../utils/typography"

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
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`

const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    @media (min-width: 760px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`

const ProjectInner = styled.div`
  ${BoxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: 3;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: rgba(2, 12, 27, 0.7);
`;

const Project = styled.div`
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Links = styled.div`
  margin-right: -10px;
  color: ${props => props.theme.themeAccent};
`;

const IconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProjectName = styled.h5`
  margin: 0 0 10px;
  color: ${props => props.theme.themeAccent};
  ${scale(1.2)}
`;

const ProjectDescription = styled.div`
  font-size: 17px;
  a {
    ${inlineLink}
  }
`;

const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 0;
  list-style: none;
  li {
    color: ${props => props.theme.themeColor};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    ${scale(-.5)}
  }
`;

const Projects = ({ projects }) => (
  <ProjectsContainer>
    <ProjectsGrid>
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
                <ProjectHeader>
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
                </ProjectHeader>
                <ProjectName>{title}</ProjectName>
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
    </ProjectsGrid>
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