/**
 * Navigation Component
 * @memberof components/molecules
 */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from '@emotion/styled'
// Helpers
import ReactInterval from 'react-interval'

const Wrapper = styled.nav({
  display: 'block'
})

const NavItem = styled(NavLink)(({ color, after }) => ({
  fontSize: '1.2rem',
  textDecoration: 'none',
  color,
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '.65rem',
  '::after': {
    marginLeft: '.2rem',
    content: after
  }
}))

const getNavItem = ({
  id,
  path,
  text,
  afterContent,
  theme: { colors },
  darkMode,
  activeItem
}) => {
  const color = darkMode ? colors.dark : colors.light
  const after = path === activeItem ? afterContent : '""'

  const Nav = (
    <NavItem after={after} color={color} key={id} to={path}>
      {text}
    </NavItem>
  )

  return Nav
}

const Navigation = ({ navItems, darkMode, theme, location }) => {
  const activeItem = location.pathname
  const [afterContent, setAfterContent] = useState('"▋"')

  return (
    <Wrapper>
      <ReactInterval
        timeout={1000}
        enabled
        callback={() => setAfterContent(afterContent === '"▋"' ? '"_"' : '"▋"')}
      />
      {navItems.map(navItem =>
        getNavItem({
          ...navItem,
          activeItem,
          darkMode,
          theme,
          afterContent
        })
      )}
    </Wrapper>
  )
}

export default withRouter(Navigation)
