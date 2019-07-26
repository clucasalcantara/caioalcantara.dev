import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.article({
  display: 'block',
  ':before': {
    content: '"LATEST POST"',
    textTransform: 'uppercase',
    position: 'absolute',
    transform: 'rotate(90deg)',
    left: '-100px',
    top: '85px',
    letterSpacing: '4px'
  }
})

const Title = styled.h2({
  fontSize: '2em',
  fontWeight: 'bold'
})

const Description = styled.p({
  display: 'block',
  marginBottom: '1em'
})

const PostWall = ({ data }) => {
  const latest = data[0]
  console.log(latest)

  return (
    <Wrapper>
      <div class="post-date">
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
      <a href="#" class="post-readmore">
        READ MORE
      </a>
    </Wrapper>
  )
}

export default PostWall
