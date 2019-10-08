import React, { useState, useMemo } from 'react'
// UI Elements
import { Page } from 'components/layout'
import { CardWall } from 'components/organisms'
// Services
import { getMediumFeed } from 'services'

const Home = ({ AppContext }) => {
  const [posts, setPosts] = useState([])

  useMemo(() => {
    getMediumFeed('clucasalcantara').then(({ items }) => setPosts(items))
  }, [])

  return (
    <Page AppContext={AppContext}>
      <CardWall data={posts} />
    </Page>
  )
}

export default Home
