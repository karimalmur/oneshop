import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Img from 'gatsby-image'

import { scale, rhythm } from "../../utils/typography"

export const BoxShadow = css`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`

export const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
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

export const ImgContainer = styled.a`
  ${BoxShadow};
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.themeAccent};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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

export const InlineLink = props => css`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  color: ${props.theme.themeColor};
  &:hover,
  &:focus,
  &:active {
    color: ${props.theme.themeColor};
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
    background-color: ${props.theme.themeColor};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0.5;
  }
`

export const ProjectsContainer = styled.section`
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

export const ProjectListContainer = styled.div`
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

export const ProjectList = styled.div`
  @media (min-width: 850px) {
    background-color: rgba(2, 12, 27, 0.7);
    padding-right: 1px;
  }
`

export const ProjectInner = styled.div`
  ${BoxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: ${rhythm(.5)};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: ${props => props.current ? props.theme.primaryHover : "rgba(2, 12, 27, 0.7)"};
  height: 100%;

  &:hover {
    background-color: ${props => props.clickable && props.theme.primaryHover};
    cursor: ${props => props.clickable ? "pointer" : "inherit"};
  }
`;

export const Project = styled.div`
  cursor: default;
  margin-bottom: 2px;
  display: block;

  p:hover {
    color: #FFF;
  }
`;

export const Links = styled.div`
  display: inline-block;
  justify-content: center;
  margin-left: ${rhythm(.1)};
  color: ${props => props.theme.themeAccent};
`;

export const IconLink = styled.a`
  position: relative;
  padding: 10px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const ProjectName = styled.h5`
  display: inline-block;
  margin: ${rhythm(.1)};
  color: ${props => props.theme.themeAccent};
  ${scale(.1)}
`;

export const ProjectDescription = styled.div`
  ${scale(-.5)};
  margin: ${rhythm(.2)};
  color: #FFFB;
  a {
    ${props => InlineLink(props)}
  }
  p {
    margin: 0;
  }
`;

export const TechList = styled.ul`
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