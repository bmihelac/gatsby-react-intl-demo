import React from 'react'
import { graphql } from 'gatsby'

import PageSettings from '../../components/PageSettings'
import { messagesFromNodes } from '../../utils'

const Page = ({ data }) => (
  <PageSettings messages={messagesFromNodes(data.allKeyValue.edges)} />
)

export default Page

// dynamic query for all translations with keys prefixed
// with 'onboard.welcome.'
export const query = graphql`
  query($language: String!) {
    allKeyValue(
      filter: {
        file: { relativeDirectory: { eq: "ooni-wui" }, name: { eq: $language } }
        key: { regex: "/^settings/" }
      }
    ) {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`
