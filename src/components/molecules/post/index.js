import React from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

const Wrapper = styled.div({
  margin: '.5rem',
  padding: '1rem'
})

const PostDate = styled.div({
  paddingBottom: '1rem',
  strong: {
    fontSize: '1.2rem'
  }
})

const Title = styled.h2(({ latest }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  wordWrap: 'break-word',
  width: latest ? '38rem' : '30rem',
  paddingBottom: '2rem'
}))

const ReadMore = styled.a(({ theme, darkMode }) => ({
  fontWeight: 'bold',
  fontSize: '1.3rem',
  textDecoration: 'none',
  color: darkMode ? theme.colors.yellow : theme.colors.dark,
  ':hover': {
    color: darkMode ? theme.colors.light : theme.colors.dark
  }
}))

const Post = ({ data, theme, darkMode, latest }) => {
  const postYear = dayjs(data.pubDate).format('YYYY')
  const postDay = dayjs(data.pubDate).format('D')
  const postMonth = dayjs(data.pubDate).format('MMM')
  return (
    <Wrapper>
      <PostDate>
        <strong>{postDay} </strong>
        {postMonth}
        {!latest && `, ${postYear}`}
      </PostDate>
      <Title latest={latest}>{data.title}</Title>
      <ReadMore
        theme={theme}
        darkMode={darkMode}
        href={data.link}
        target="_blank"
      >
        READ MORE
      </ReadMore>
    </Wrapper>
  )
}
export default Post
