/**
 * PostWall Component
 * @memberof components/organisms
 */
import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Post } from 'components/molecules'

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const Latest = styled.article(({ darkMode, theme }) => ({
  position: 'relative ',
  padding: '5rem 10rem',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  ':before': {
    fontSize: '1.1rem',
    fontWeight: 800,
    content: '"LATEST POST"',
    textTransform: 'uppercase',
    position: 'absolute',
    transform: 'rotate(90deg)',
    left: 0,
    top: '50%',
    letterSpacing: '4px'
  }
}))

const Posts = styled.div(({ darkMode, theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  padding: '3em'
}))

const PostWall = ({ data, theme, darkMode, isMobile }) => {
  const latest = data[0] || {}
  const posts = data.slice(1)

  return (
    <Wrapper>
      {!isMobile && (
        <>
          <Latest theme={theme} darkMode={darkMode}>
            <Post data={latest} theme={theme} darkMode={darkMode} latest />
          </Latest>
          <Posts theme={theme} darkMode={darkMode}>
            {posts.map(post => (
              <Post
                data={post}
                key={post.guid}
                theme={theme}
                darkMode={darkMode}
              />
            ))}
          </Posts>
        </>
      )}
    </Wrapper>
  )
}

export default PostWall
