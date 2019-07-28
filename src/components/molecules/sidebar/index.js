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

const Wrapper = styled.aside(({ theme: { colors }, darkMode }) => ({
  width: '29em',
  minHeight: '100%',
  padding: '5em',
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

const Copyright = styled.span()

const Footer = styled.div(({ darkMode, theme: { colors } }) => ({
  color: darkMode ? colors.dark : colors.light
}))

const SideBar = ({ theme, config: { nav, social }, darkMode, setDarkMode }) => {
  console.log('Handler', setDarkMode)
  console.log('Value', darkMode)

  return (
    <Wrapper theme={theme} darkMode={darkMode}>
      <Logo theme={theme} darkMode={darkMode} />
      <Navigation
        isMobile={false}
        navItems={nav}
        theme={theme}
        darkMode={darkMode}
      />
      <Footer theme={theme} darkMode={darkMode}>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <SocialElements accounts={social} />
        <Copyright className="copyright">
          © 2019 Todos os direitos reservados
        </Copyright>
      </Footer>
    </Wrapper>
  )
}

SideBar.propTypes = {}

export default SideBar
