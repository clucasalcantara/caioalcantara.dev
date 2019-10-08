/**
 * CardWall Component
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

const Cards = styled.div(({ darkMode, theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  padding: '3rem'
}))

const CardWall = ({ data, AppContext, type }) => {
  const latest = data[0] || {}
  const dataset = type !== 'projects' ? data.slice(1) : data

  return (
    <AppContext.Consumer>
      {({ theme, darkMode, isMobile }) => (
        <Wrapper>
          {type !== 'projects' && !isMobile ? (
            <>
              <Latest theme={theme} darkMode={darkMode}>
                <Post data={latest} theme={theme} darkMode={darkMode} latest />
              </Latest>
              <Cards theme={theme} darkMode={darkMode}>
                {dataset.map(post => (
                  <Post
                    data={post}
                    key={post.guid}
                    theme={theme}
                    darkMode={darkMode}
                  />
                ))}
              </Cards>
            </>
          ) : null}
          {type === 'projects' && (
            <Cards theme={theme} darkMode={darkMode}>
              {dataset.map(item => (
                <Post data={item} theme={theme} darkMode={darkMode} />
              ))}
            </Cards>
          )}
        </Wrapper>
      )}
    </AppContext.Consumer>
  )
}

export default CardWall
