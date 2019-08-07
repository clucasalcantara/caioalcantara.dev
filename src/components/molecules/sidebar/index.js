/**
 * SideBar Component
 * @memberof components/molecules
 */
import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Logo } from 'components/atoms'
import Navigation from '../navigation'
import SocialElements from '../social-elements'
import DarkMode from '../dark-mode'

const Wrapper = styled.aside(({ theme: { colors }, darkMode, isMobile }) => ({
  minWidth: '25rem',
  minHeight: '100%',
  padding: isMobile ? '2rem' : '5rem',
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  zIndex: '2',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: darkMode ? colors.yellow : colors.dark,
  transition: '1s ease'
}))

const Copyright = styled.span({
  position: 'absolute',
  bottom: '1.5rem',
  paddingLeft: '.5rem'
})

const Footer = styled.div(({ darkMode, theme: { colors } }) => ({
  color: darkMode ? colors.dark : colors.light
}))

const SideBar = ({
  theme,
  config: { nav, social },
  darkMode,
  setDarkMode,
  isMobile
}) => (
  <Wrapper theme={theme} darkMode={darkMode} isMobile={isMobile}>
    <Logo theme={theme} darkMode={darkMode} isMobile={isMobile} />
    <Navigation
      isMobile={isMobile}
      navItems={nav}
      theme={theme}
      darkMode={darkMode}
    />
    <Footer theme={theme} darkMode={darkMode}>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <SocialElements darkMode={darkMode} theme={theme} accounts={social} />
      <Copyright className="copyright">
        © 2019 Todos os direitos reservados
      </Copyright>
    </Footer>
  </Wrapper>
)

SideBar.propTypes = {}

export default SideBar
