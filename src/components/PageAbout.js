import React from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Page = ({ link, messages }) => (
  <Layout>
    <IntlProvider messages={messages}>
      <div>
        <h1>
          <FormattedMessage id="onboard.welcome.title" />
        </h1>
        <p>
          <FormattedMessage id="onboard.welcome.text1" />
        </p>
        <p>
          <Link to={link}>
            <FormattedMessage id="onboard.welcome.learnMore" />
          </Link>
        </p>
      </div>
    </IntlProvider>
  </Layout>
)

export default Page
