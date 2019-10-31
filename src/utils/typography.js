import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.baseFontSize = "20px"

fairyGateTheme.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
  'h1': {
    color: 'var(--textTitle)',
  },
  'h2': {
    color: 'var(--textTitle)',
  },
  'h3': {
    color: 'var(--textTitle)',
  },
  'h4': {
    color: 'var(--textTitle)',
  },
  'h5': {
    color: 'var(--textTitle)',
  },
  'h6': {
    color: 'var(--textTitle)',
  },
})

const typography = new Typography(fairyGateTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export const { scale, rhythm, options } = typography

export default typography