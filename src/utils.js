import _ from 'lodash'
import { addLocaleData } from 'react-intl'

export const getLanguageFromPath = (path, languages) => {
  if (!path) {
    return languages[0]
  }
  const langPart = path.split('/')[1]
  return languages.includes(langPart) ? langPart : languages[0]
}

export const addLocaleDataFor = languages =>
  languages.forEach(language => addLocaleData(...require(`react-intl/locale-data/${language}`)))


/**
 * Converts nodes with key, value to object.
 */
export const messagesFromNodes = nodes => {
  const messages = _.fromPairs(nodes.map(e => [e.node.key, e.node.value]))
  return messages
}

