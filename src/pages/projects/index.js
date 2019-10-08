import React, { useState, useMemo } from 'react'
// UI Elements
import { Page } from 'components/layout'
import { CardWall } from 'components/organisms'
// Services
import createGithubClient, { getUserRepositories } from 'services/github'

const Projects = ({ AppContext }) => {
  const client = createGithubClient()
  const [projects, setProjects] = useState([])

  useMemo(async () => {
    const data = await getUserRepositories(client)
    setProjects(data)
  }, [])

  console.log(projects)

  return (
    <Page AppContext={AppContext}>
      <CardWall data={projects} type="projects" />
    </Page>
  )
}

export default Projects
