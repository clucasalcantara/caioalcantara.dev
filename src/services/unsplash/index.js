import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId:
    '56ef0262b44c0f3a1ee9a4576c4f35105325aa1d21e18b78132355dd89ebec47',
  secret: '013bb4b541a0fa9e3070d93d847181aed0e36ca96d71f210b51825947b5d958e'
})

const getRandomImage = async (cb, query = 'white shark') => {
  const image = await unsplash.photos
    .getRandomPhoto({ query })
    .then(response => response.json())
    .then(data => data)

  if (image.urls) {
    return cb(image)
  }

  return null
}

export { getRandomImage }
