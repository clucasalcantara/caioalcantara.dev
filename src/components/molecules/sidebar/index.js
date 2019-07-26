import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Logo } from 'components/atoms'
import Navigation from '../navigation'
import SocialElements from '../social-elements'
import DarkMode from '../dark-mode'

const Wrapper = styled.aside(
  ({ theme: { colors } }) => `
  width: 29em;
	min-height: 100%;
	padding: 5em;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 2;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction:  column;
  flex-direction: column;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  background-color: ${colors.yellow};
`
)

const Copyright = styled.span()

const Footer = styled.div()

const SideBar = ({ theme, config: { nav, social }, darkMode, setDarkMode }) => {
  console.log('Handler', setDarkMode)
  console.log('Value', darkMode)

  return (
    <Wrapper theme={theme}>
      <Logo theme={theme} />
      <Navigation isMobile={false} navItems={nav} />
      <Footer>
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
