import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// Routes
import routes from 'routes'

// Services
import { serviceWorker } from 'services'

// Store
import createContext from 'store/create-context'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const baseContext = createContext({ darkMode, setDarkMode })

  return (
    <BrowserRouter>
      {renderRoutes(routes, {
        Provider: baseContext.Provider,
        Consumer: baseContext.Consumer,
        baseContext: baseContext._currentValue
      })}
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
