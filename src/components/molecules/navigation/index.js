/**
 * Navigation Component
 * @memberof components/molecules
 */
import React, { useState } from 'react'
import styled from '@emotion/styled'
// Helpers
import ReactInterval from 'react-interval'

const Wrapper = styled.nav({
  display: 'block'
})

const NavItem = styled.a(
  ({ active, darkMode, theme: { colors }, afterContent }) => ({
    fontSize: '1.2em',
    textDecoration: 'none',
    color: darkMode ? colors.dark : colors.light,
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '.5em',
    '::after': {
      marginLeft: '.2rem',
      content: active ? afterContent : '""'
    }
  })
)

const Navigation = ({ active = 0, navItems, darkMode, theme }) => {
  const [activeItem, setActiveItem] = useState(active)
  const [afterContent, setAfterContent] = useState('"▋"')

  return (
    <Wrapper>
      <ReactInterval
        timeout={1000}
        enabled
        callback={() => setAfterContent(afterContent === '"▋"' ? '"_"' : '"▋"')}
      />
      {navItems.map(({ id, text, path }, idx) => (
        <NavItem
          afterContent={afterContent}
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
