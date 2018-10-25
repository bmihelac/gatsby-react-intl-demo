/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const languages = ['en', 'sl', 'it']

const getLanguageFromPath = (path, languages) => {
  if (!path) {
    return languages[0]
  }
  const langPart = path.split('/')[1]
  return languages.includes(langPart) ? langPart : languages[0]
}

module.exports = {
  onCreatePage: ({ page, actions }, pluginOptions) => {
    const { createPage, deletePage } = actions
    const newPage = Object.assign({}, page)
    newPage.context = {
      ...page.context,
      i18nPage: true,
      language: getLanguageFromPath(page.path, languages) || languages[0],
    }
    deletePage(page)
    createPage(newPage)
  },
}
