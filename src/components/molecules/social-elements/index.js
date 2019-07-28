import React from 'react'
import styled from '@emotion/styled'
import ReactSVG from 'react-svg'

const Wrapper = styled.div({
  marginBottom: '.5em',
  display: 'flex'
})

const SocialElement = styled.a(({ theme: { colors }, darkMode }) => ({
  padding: '.5em',
  svg: {
    fill: darkMode ? colors.dark : colors.light
  }
}))

const SocialElements = ({ accounts, theme, darkMode }) => (
  <Wrapper>
    {accounts.map(account => (
      <SocialElement
        href="#"
        key={account.id}
        darkMode={darkMode}
        theme={theme}
      >
        <ReactSVG src={`img/${account.id}-logo.svg`} />
      </SocialElement>
    ))}
  </Wrapper>
)

export default SocialElements
