import React from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'

import Layout from '../components/layout'

const Page = ({ messages }) => (
  <Layout>
    <IntlProvider messages={messages}>
      <div>
        <h1>
          <FormattedMessage id="settings.title" />
        </h1>
        <p>
          <FormattedMessage id="settings.sharingOptions.uploadMethod" />
        </p>
        <p>
          <FormattedMessage id="settings.sharingOptions.includeNetwork" />
        </p>
        <p>
          <FormattedMessage id="settings.sharingOptions.includeCountry" />
        </p>
      </div>
    </IntlProvider>
  </Layout>
)

export default Page

