/**
 * Logo component
 * @memberof components/atoms
 */
import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.a({
  textDecoration: 'none',
  display: 'block'
})

const H1 = styled.h1(({ theme: { colors }, darkMode }) => ({
  textAlign: 'left',
  fontSize: '2.2em',
  lineHeight: '1.2',
  fontWeight: '800',
  padding: '.6em .8em',
  display: 'inline-block',
  backgroundColor: darkMode ? colors.dark : colors.light,
  color: darkMode ? colors.yellow : colors.dark,
  transition: '1s ease'
}))

const Headline = styled.span(({ theme: { colors }, darkMode }) => ({
  marginTop: '.2em',
  display: 'block',
  fontWeight: 'bold',
  color: darkMode ? colors.dark : colors.light,
  fontSize: '1.7em',
  textAlign: 'start'
}))

const Logo = ({ theme, darkMode }) => (
  <Wrapper>
    <H1 theme={theme} darkMode={darkMode}>
      CAIO <br />
      ALCANTARA ▋
    </H1>
    <Headline darkMode={darkMode} theme={theme}>
      SOFTWARE ENGINEER
    </Headline>
  </Wrapper>
)

export default Logo
