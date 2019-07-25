import React from 'react'
// UI Elements
import { Page } from 'components/layout'

const About = ({ baseContext: { config, theme } }) => (
  <Page theme={theme} config={config}>
    <span>about</span>
  </Page>
)

export default About
