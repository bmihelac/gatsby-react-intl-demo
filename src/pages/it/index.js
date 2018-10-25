import _ from 'lodash'
import React from 'react'
import { graphql } from 'gatsby'

import PageAbout from '../../components/PageAbout'

const messagesFromNodes = nodes => {
  const messages = _.fromPairs(nodes.map(e => [e.node.key, e.node.value]))
  return messages
}

const IndexPage = ({ data }) => (
  <PageAbout
    link="/it/settings"
    messages={messagesFromNodes(data.allKeyValue.edges)}
  />
)

export default IndexPage

// dynamic query for all translations with keys prefixed
// with 'onboard.welcome.'
export const query = graphql`
  query($language: String!) {
    allKeyValue(
      filter: {
        file: {
          relativeDirectory: { eq: "ooni-wui" }
          name: { eq: $language }
        }
        key: { regex: "/^onboard.welcome/" }
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
