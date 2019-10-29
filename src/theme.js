import style from "./styles/global.module.css"

const themeColor = style.themeColor
const themeAccent = style.themeAccent
const primaryLight = style.primaryLight
const primaryHover = style.primaryHover
const secondaryDark = style.secondaryDark
const textNormal = style.textNormal
const black = style.black

const Theme = {
  backgroundColor: black,
  themeColor,
  themeAccent,
  primaryHover,
  primaryLight,
  textNormal,
  activeLink: themeColor,
  link: textNormal,
  mobile: '576px',
  secondaryDark
}

export default Theme