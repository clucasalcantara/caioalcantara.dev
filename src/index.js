import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
// Routes Config
import routes from 'routes'
// Services
import { serviceWorker } from 'services'
// Store
import createContext from 'store/create-context'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const AppContext = createContext({ darkMode, setDarkMode })

  return (
    <AppContext.Consumer>
      {({ config: { metas } }) => (
        <BrowserRouter>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={metas.description} />
            <title>{metas.title}</title>
            <link rel="canonical" href={metas.canonical} />
          </Helmet>
          {renderRoutes(routes, { AppContext })}
        </BrowserRouter>
      )}
    </AppContext.Consumer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
