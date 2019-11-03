import React, { useContext } from "react"
import { useMediaQuery } from "react-responsive"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import ProjectList from "./ProjectList"
import ProjectDetails from "./ProjectDetails"
import SEO from "../seo"

export const ProjectsContext = React.createContext()

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-grow: 1;
  width: 100%;
  max-height: ${props => (props.wideScreen && !props.detailsOn) && "82.5vh"};
  position: relative;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`

const Projects = ({ detailedView }) => {
  const wideScreen = useMediaQuery({ query: "(min-device-width: 760px)" })
  const { currentProject } = useContext(ProjectsContext)

  return (
    <ProjectsContainer
      wideScreen={wideScreen}
      detailedView={detailedView}
      css={css`
        flex-direction: ${(wideScreen || !detailedView) ? "column" : "column-reverse"};
      `}
    >
      <SEO title={currentProject.frontmatter.title} description={currentProject.excerpt} />
      <ProjectList highlightCurrent={detailedView || wideScreen} />
      {(detailedView || wideScreen) && <>
        <ProjectDetails />
      </>}
    </ProjectsContainer>
  )
}

export default Projects

