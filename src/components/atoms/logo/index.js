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

const H1 = styled.h1(({ theme: { colors }, darkMode, isMobile }) => ({
  textAlign: 'left',
  fontSize: isMobile ? '2rem' : '2.3rem',
  lineHeight: '1.2',
  fontWeight: '800',
  padding: '.6em .8rem',
  display: 'inline-block',
  backgroundColor: darkMode ? colors.dark : colors.light,
  color: darkMode ? colors.yellow : colors.dark,
  transition: '1s ease'
}))

const Headline = styled.span(({ theme: { colors }, darkMode, isMobile }) => ({
  marginTop: '.2rem',
  display: 'block',
  fontWeight: 'bold',
  color: darkMode ? colors.dark : colors.light,
  fontSize: isMobile ? '1.65rem' : '1.7rem',
  textAlign: 'start'
}))

const Logo = ({ theme, darkMode, isMobile }) => (
  <Wrapper>
    <H1 theme={theme} darkMode={darkMode} isMobile={isMobile}>
      CAIO <br />
      ALCANTARA ▋
    </H1>
    <Headline darkMode={darkMode} theme={theme} isMobile={isMobile}>
      SOFTWARE ENGINEER
    </Headline>
  </Wrapper>
)

export default Logo
