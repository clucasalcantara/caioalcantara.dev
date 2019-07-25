const MEDIUM_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed'

const getFeed = async username => {
  const res = await fetch(`${MEDIUM_URL}/@${username}`)

  return res.json()
}

export default getFeed
