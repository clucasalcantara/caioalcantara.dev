import React from 'react'
import styled from '@emotion/styled'

// UI Elements
import { Tag } from 'components/atoms'

const TagList = styled.div(({ palette }) => ({
  marginTop: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  background: 'transparent',
  color: palette.white
}))

export default function Tags({ palette, categories }) {
  return (
    <TagList palette={palette}>
      {categories.map(category => (
        <Tag key={category} palette={palette}>
          {category}
        </Tag>
      ))}
    </TagList>
  )
}
