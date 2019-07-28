/**
 * Navigation Component
 * @memberof components/molecules
 */
import React, { useState } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.nav({
  display: 'block'
})

const NavItem = styled.a(({ active, darkMode, theme: { colors } }) => ({
  fontSize: '1.2em',
  textDecoration: 'none',
  color: darkMode ? colors.dark : colors.light,
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '.5em',
  '::before': {
    content: active ? '"▋"' : '""'
  }
}))

const Navigation = ({ active = 0, navItems, darkMode, theme }) => {
  const [activeItem, setActiveItem] = useState(active)

  return (
    <Wrapper>
      {navItems.map(({ id, text, path }, idx) => (
        <NavItem
          theme={theme}
          darkMode={darkMode}
          key={id}
          active={idx === activeItem}
          href={path}
          onClick={() => setActiveItem(idx)}
        >
          {text}
        </NavItem>
      ))}
    </Wrapper>
  )
}

export default Navigation
