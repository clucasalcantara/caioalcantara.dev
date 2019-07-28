/**
 * PostWall Component
 * @memberof components/organisms
 */
import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const Latest = styled.article(({ theme, darkMode }) => ({
  padding: '5rem 10rem',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  ':before': {
    fontSize: '1.1rem',
    fontWeight: 800,
    content: '"LATEST POST"',
    textTransform: 'uppercase',
    position: 'fixed',
    transform: 'rotate(90deg)',
    left: '38%',
    top: '13%',
    letterSpacing: '4px'
  }
}))

const PostDate = styled.div({
  paddingBottom: '1rem',
  strong: {
    fontSize: '1.3rem'
  }
})

const Title = styled.h2({
  fontSize: '2em',
  fontWeight: 'bold',
  wordWrap: 'break-word',
  width: '38rem',
  paddingBottom: '2rem'
})

const ReadMore = styled.a(({ theme, darkMode }) => ({
  fontWeight: 'bold',
  fontSize: '1.3em',
  textDecoration: 'none',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  ':hover': {
    color: darkMode ? theme.colors.light : theme.colors.dark
  }
}))

const PostWall = ({ data, theme, darkMode, isMobile }) => {
  const latest = data[0] || {}

  return (
    <Wrapper>
      <Latest theme={theme} darkMode={darkMode}>
        {!isMobile && (
          <>
            <PostDate>{latest.pubDate}</PostDate>
            <Title>{latest.title}</Title>
            <ReadMore
              theme={theme}
              darkMode={darkMode}
              href={latest.link}
              target="_blank"
            >
              READ MORE
            </ReadMore>
          </>
        )}
      </Latest>
    </Wrapper>
  )
}

export default PostWall
