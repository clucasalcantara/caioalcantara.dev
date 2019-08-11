import React, { useState, useMemo } from 'react'
// UI Elements
import { Page } from 'components/layout'
import { PostWall } from 'components/organisms'
// Services
import { getMediumFeed } from 'services'

const Home = ({ AppContext }) => {
  const [posts, setPosts] = useState([])

  useMemo(() => {
    getMediumFeed('clucasalcantara').then(({ items }) => setPosts(items))
  }, [])

  return (
    <Page AppContext={AppContext}>
      <PostWall data={posts} />
    </Page>
  )
}

export default Home
