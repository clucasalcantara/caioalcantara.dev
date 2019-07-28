import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(document.body.clientWidth)
  /* eslint-disable no-console */
  console.log('Resized, setting width', width)

  useEffect(() => {
    const handleResize = () => setWidth(document.body.clientWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export default useWindowWidth
