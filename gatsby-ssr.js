import React from 'react'

import { IntlProvider } from 'react-intl'
import {addLocaleDataFor, getLanguageFromPath} from './src/utils'

import languages from './src/locale'
addLocaleDataFor(languages)

/**
 * Create IntlProvider for generated pages.
 * Sync load messages, so they are available immediately.
 */
export const wrapPageElement = ({ element, props }) => {
  const language = getLanguageFromPath(props.location.pathname, languages)
  const messages = require(`./src/locale/${language}.json`)
  return (
    <IntlProvider locale={language} messages={messages}>
      {element}
    </IntlProvider>
  )
}


/**
 * Adds messages for current langugage to global __message.
 * __message will be used to setup IntlProvider in IntlLoader
 */
export const onRenderBody = (
  { pathname, setHeadComponents, setHtmlAttributes, setBodyAttributes, ...other },
  pluginOptions
) => {
  //The pathname is only set during builds.
  //In development, it's not set because we do just one server render which covers all pages.
  const language = getLanguageFromPath(pathname, languages)
  const messages = require(`./src/locale/${language}.json`)
  const __html = `
    var __messages = ${JSON.stringify(messages)};
    var __language = '${language}';
  `
  setHeadComponents([<script dangerouslySetInnerHTML={{ __html }} />])
}
