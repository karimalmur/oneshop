import style from "./styles/global.module.css"

const {
  themeColor, themeAccent, primaryLight, primaryHover,
  secondaryDark, textNormal, black, gray } = style

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
  secondaryDark,
  gray,
}

export default Theme