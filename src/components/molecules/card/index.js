import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

// UI Elements
import { Tags } from 'components/molecules'

const Wrapper = styled.div(({ palette, darkMode }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '25rem',
  minHeight: '12rem',
  background: darkMode ? palette.main : palette.gray,
  padding: '1rem',
  margin: '.5rem',
  borderRadius: '.5rem'
}))

const TransparentText = styled.div({
  background: 'transparent',
  zIndex: 2
})

const Title = styled.div(({ palette }) => ({
  background: 'transparent',
  color: palette.white,
  fontSize: '1.5rem',
  zIndex: 2
}))

export default function Card({
  data: { title, categories = [], link = '' },
  palette,
  darkMode
}) {
  const postUrl = `//${link.replace('https://', '')}`

  return (
    <Link to={postUrl} target="_blank">
      <Wrapper palette={palette} darkMode={darkMode}>
        <TransparentText>
          <Title palette={palette} darkMode={darkMode}>
            {title}
          </Title>
        </TransparentText>
        {categories.length > 0 && (
          <Tags palette={palette} categories={categories} />
        )}
      </Wrapper>
    </Link>
  )
}

Card.propTypes = {}
