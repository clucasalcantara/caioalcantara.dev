import React from 'react'
import styled from '@emotion/styled'

// UI Elements
import Toggle from 'react-toggle'
import { Icon } from 'components/atoms'
import 'react-toggle/style.css'

const DarkMode = styled.div({
  display: 'flex',
  marginBottom: '1rem',
  alignItems: 'center',
  background: 'transparent'
})

export default ({ darkMode, setDarkMode }) => (
  <DarkMode>
    <Icon iconName="IoIosSunny" handleClick={() => setDarkMode(false)} />
    <Toggle
      checked={darkMode}
      icons={false}
      onChange={() => setDarkMode(!darkMode)}
      onKeyDown={() => setDarkMode(!darkMode)}
      aria-label="dark-mode"
    />
    <Icon iconName="IoMdMoon" handleClick={() => setDarkMode(true)} />
  </DarkMode>
)
