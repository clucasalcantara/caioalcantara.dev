export const GET_USER_REPOS = `
  query($login: String!, $limit: Int!) {
    repositoryOwner(login: $login) {
      pinnedRepositories(last: $limit) {
        edges {
          node {
            name
            description
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`
