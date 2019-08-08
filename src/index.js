import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'

// Routes
import routes from 'routes'

// Services
import { serviceWorker } from 'services'

// Store
import createContext from 'store/create-context'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const { _currentValue } = createContext({ darkMode, setDarkMode })
  const {
    config: { metas }
  } = _currentValue

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={metas.description} />
        <title>{metas.title}</title>
        <link rel="canonical" href={metas.canonical} />
      </Helmet>
      {renderRoutes(routes, {
        baseContext: _currentValue
      })}
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
