/**
 * Logo component
 * @memberof components/atoms
 */
import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.a({
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block'
})

const H1 = styled.h1(({ theme }) => ({
  textAlign: 'left',
  fontSize: '2.2em',
  lineHeight: '1.2',
  fontWeight: '800',
  padding: '.6em .8em',
  display: 'inline-block',
  backgroundColor: '#26282E',
  color: theme.colors.yellow
}))

const Headline = styled.span({
  marginTop: '.2em',
  display: 'block',
  fontWeight: 'bold',
  color: '#26282E',
  fontSize: '1.7em'
})

const Logo = ({ theme }) => (
  <Wrapper>
    <H1 theme={theme}>
      CAIO <br />
      ALCANTARA ▋
    </H1>
    <Headline>SOFTWARE ENGINEER</Headline>
  </Wrapper>
)

export default Logo
