import React, { useContext } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import {
  ProjectInner, ProjectName, Links, IconLink, ProjectDescription,
  ImgContainer, FeaturedImg, TechList
} from "./shared"
import IconGithub from "../../components/icons/github"
import IconExternal from "../../components/icons/external"
import { ProjectsContext } from "."

const CurrentProjectContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border: ${props => `1px solid ${props.theme.themeColor}`};
  border-left: none;
`

const ProjectDetails = () => {
  const { currentProject } = useContext(ProjectsContext)
  const { frontmatter, html } = currentProject
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

export default ProjectDetails