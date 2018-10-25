import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectIntl } from 'react-intl'
import { Link } from 'gatsby'

import languages, { languageNames } from '../locale'
import Header from './header'
import './layout.css'

const Layout = ({ intl, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle="Gatsby + react-intl demo 2" />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >

        <div
          style={{
            marginBottom: '3rem',
          }}
        >
            <ul className="select-language">
              {languages.map((language, index) => (
                <li key={index}>
                  {language === intl.locale ? (
                    languageNames[index]
                  ) : (
                    <Link
                      to={language === languages[0] ? '/' : `/${language}/`}
                    >
                      {languageNames[index]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {children}

          <p style={{marginTop: 200}}>
            <a href="https://github.com/bmihelac/gatsby-react-intl-demo/tree/test/dynamic-query">
              Source code
            </a>
          </p>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
