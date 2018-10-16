import React from 'react'

import { IntlProvider } from 'react-intl'
import {addLocaleDataFor, getLanguageFromPath} from './src/utils'

import languages from './src/locale'
addLocaleDataFor(languages)

class IntlLoader extends React.Component {
  constructor(props) {
    super(props)
    //sets initial messages from window (this is set in onRenderBody ssr hook)
    this.state = {
      messages: window.__messages,
      language: window.__language,
    }
  }

  /**
   * Async loads messages and set state.
   */
  loadMessages(language) {
    import(`./src/locale/${language}.json`).then(messages => {
      this.setState({ messages, language })
    })
  }

  // Note: in development onRenderBody is renedered only once for all pages
  componentDidMount() {
    if (this.props.language !== this.state.language) {
      this.loadMessages(this.props.language)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.loadMessages(this.props.language)
    }
  }

  render() {
    const {language, ...otheProps} = this.props
    return (
      <IntlProvider locale={language} messages={this.state.messages} {...otheProps} />
    )
  }
}

export const wrapPageElement = ({ element, props }) => {
  const language = getLanguageFromPath(props.location.pathname, languages)
  return (
    <IntlLoader language={language} {...props}>
      {element}
    </IntlLoader>
  )
}
