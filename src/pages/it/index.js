import React from 'react'
import { FormattedMessage } from 'react-intl'

import Layout from '../../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>
      <FormattedMessage id="hello"/>
    </h1>
  </Layout>
)

export default IndexPage
