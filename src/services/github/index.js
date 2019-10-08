import { GraphQLClient } from 'graphql-hooks'
import { GET_USER_REPOS } from 'services/github/queries'
import initialState from 'store'

const token = 'ad5f4bae564a985c7a86f6e02f5d8e9e62633abc'

const createGithubClient = () => {
  const client = new GraphQLClient({
    url: 'https://api.github.com/graphql',
    headers: {
      authorization: `bearer ${token}`
    }
  })

  return client
}

export const getUserRepositories = async client => {
  let graphlClient = client

  if (!graphlClient) {
    graphlClient = createGithubClient()
  }

  const {
    data: {
      repositoryOwner: { pinnedRepositories }
    }
  } = await graphlClient.request({
    query: GET_USER_REPOS,
    variables: {
      login: initialState.config.github_username,
      limit: 25
    }
  })

  const repositories = []

  await pinnedRepositories.edges.map(({ node }) => repositories.push(node))

  return repositories
}

export default createGithubClient
