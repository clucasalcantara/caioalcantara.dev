import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.article(({ theme, darkMode }) => ({
  padding: '5rem',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  display: 'block',
  ':before': {
    content: '"LATEST POST"',
    textTransform: 'uppercase',
    position: 'absolute',
    transform: 'rotate(90deg)',
    left: '28rem',
    top: '8rem',
    letterSpacing: '4px'
  }
}))

const Title = styled.h2({
  fontSize: '2em',
  fontWeight: 'bold'
})

const Description = styled.p({
  display: 'block',
  marginBottom: '1em',
  marginTop: '1em'
})

const PostWall = ({ data, theme, darkMode }) => {
  console.log(darkMode)
  const latest = data[0]
  console.log(latest)

  return (
    <Wrapper theme={theme} darkMode={darkMode}>
      <div className="post-date">
        <strong>15</strong> Mar
      </div>
      <Title>
        Como configurar corretamente os pacotes globais do node usando n e zsh
      </Title>
      <Description>
        Eu sofri e encontrei uma solução pro tão famoso command not found após
        um npm i -g xpto{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Description>
      <a href="#" className="post-readmore">
        READ MORE
      </a>
    </Wrapper>
  )
}

export default PostWall
