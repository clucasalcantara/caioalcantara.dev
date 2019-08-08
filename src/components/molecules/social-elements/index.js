/**
 * Social Elements
 * @memberof components/molecules
 */
import React from 'react'
import styled from '@emotion/styled'
import ReactSVG from 'react-svg'

const Wrapper = styled.div({
  marginBottom: '.5rem',
  display: 'flex'
})

const SocialElement = styled.a(({ theme: { colors }, darkMode }) => ({
  padding: '.5rem',
  svg: {
    fill: darkMode ? colors.dark : colors.light
  }
}))

const SocialElements = ({ accounts, theme, darkMode }) => (
  <Wrapper>
    {accounts.map(account => (
      <SocialElement
        href={account.path}
        target="_blank"
        key={account.id}
        darkMode={darkMode}
        theme={theme}
        aria-label={account.id}
        rel="noreferrer"
      >
        <ReactSVG src={`imgs/${account.id}-logo.svg`} />
      </SocialElement>
    ))}
  </Wrapper>
)

export default SocialElements
