import React, { useState } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.nav({
  display: 'block'
})

const NavItem = styled.a(({ active }) => ({
  fontSize: '1.8em',
  textDecoration: 'none',
  color: '#26282E',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '.5em',
  '::before': {
    content: active ? '"▋"' : '""'
  }
}))

const Navigation = ({ active = 0, navItems }) => {
  const [activeItem, setActiveItem] = useState(active)

  return (
    <Wrapper>
      {navItems.map(({ id, text, path }, idx) => (
        <NavItem
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
