import React from 'react'
import * as Ionicons from 'react-icons/io'
import styled from '@emotion/styled'

const Icon = styled.div({
  padding: '.3rem',
  background: 'transparent',
  cursor: 'pointer'
})

export default ({
  iconName,
  size = '1em',
  handleClick = () => console.log('Clicked')
}) => {
  const IconComponent = Ionicons[iconName]

  return (
    <Icon>
      <IconComponent size={size} onClick={() => handleClick()} />
    </Icon>
  )
}
