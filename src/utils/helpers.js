export function isUrlExternal(url) {
  const LOCAL_URL = /^\/(?!\/)/
  process.env.NODE_ENV !== `production` && !LOCAL_URL.test(url)
}
