import React, { useState, useEffect } from 'react'
// UI Elements
import { Page } from 'components/layout'
import { PostWall } from 'components/organisms'
// Services
import { getMediumFeed } from 'services'

const Home = ({ baseContext: { config, theme, getParticles } }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getMediumFeed('clucasalcantara').then(({ items }) =>
      setPosts(items.filter(post => post.categories.length))
    )
  }, [])

  return (
    <Page theme={theme} config={config} getParticles={getParticles}>
      <PostWall data={posts} />
    </Page>
  )
}

export default Home
