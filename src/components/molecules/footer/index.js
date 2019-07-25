import React from 'react'
import styled from '@emotion/styled'

const Footer = styled.footer(({ typography }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  bottom: 0,
  left: 0,
  position: 'relative',
  fontSize: '.7rem',
  marginTop: '5rem',
  fontFamily: typography
}))

export default ({ theme: { fontFamily } }) => (
  <Footer typography={fontFamily}>
    <p>© 2019 Todos os direitos reservados</p>
  </Footer>
)
