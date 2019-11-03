import React, { useContext } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

import { ProjectsContext } from "./index"
import {
  ProjectInner, ProjectName, Links, IconLink, ProjectDescription, TechList
} from "./shared"
import IconGithub from "../../components/icons/github"
import IconExternal from "../../components/icons/external"

const ProjectListContainer = styled.div`
  position: relative;
  overflow-y: auto;

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

const List = styled.div`
  @media (min-width: 850px) {
    background-color: rgba(2, 12, 27, 0.7);
    padding-right: 1px;
  }
`

export const ProjectListHeader = styled.div`
  align-items: center;
  border-bottom: rgba(2, 12, 27, 0.7);
  display: flex;
  height: 60px;
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
`

const Project = styled.div`
  cursor: default;
  margin-bottom: 2px;
  display: block;

  p:hover {
    color: #FFF;
  }
`;

const ProjectList = ({ highlightCurrent }) => {
  const { projects, currentProject } = useContext(ProjectsContext)
  return (
    <ProjectListContainer>
      <List>
        <ProjectListHeader>Our Projects</ProjectListHeader>
        {projects.map(({ node }, i) => {
          const { frontmatter, excerpt, fields } = node;
          const { github, external, title, tech } = frontmatter;
          const { slug } = fields
          const path = `/projects${slug}`

          return (
            <Project key={i} tabIndex="0" onClick={() => { navigate(path) }}>
              <ProjectInner clickable current={node === currentProject && highlightCurrent}>
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
          );
        })}
      </List>
    </ProjectListContainer>
  )
}

ProjectList.propTypes = {
  highlightCurrent: PropTypes.bool,
}

export default ProjectList
