import React from "react"
import PropTypes from "prop-types"
import PrimaryLink from "./PrimaryLink"
import styled from "@emotion/styled"

const StyledLink = styled(PrimaryLink)`
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    background: #fff;
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    bottom: 0;
    width: 0;
    left: 50%;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover:after { 
    width: 100%; 
    left: 0; 
  }
`

const PermanentlyUnderlinedStyledLink = styled(PrimaryLink)`
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    background: ${props => props.theme.themeColor};
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    bottom: 0;
    width: 0;
    left: 50%;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:after { 
    width: 100%; 
    left: 0; 
  }
`

const UnderlinedPrimaryLink = (props) => {
  const { permanent, ...cssProps } = props
  return (
    <>
      {permanent && <PermanentlyUnderlinedStyledLink {...cssProps} />}
      {!permanent && <StyledLink {...cssProps} />}
    </>
  )
}
export default UnderlinedPrimaryLink

UnderlinedPrimaryLink.propTypes = {
  permanent: PropTypes.bool,
}