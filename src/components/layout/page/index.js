import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Particles from 'react-particles-js'
// UI Elements
import { SideBar } from 'components/molecules'

const Main = styled.div({
  height: '90vh',
  position: 'relative',
  zIndex: '1',
  paddingLeft: '450px'
})

const Wrapper = styled.div(({ theme: { fontFamily } }) => ({
  height: '100%',
  flex: 1,
  padding: '0 1rem;',
  fontFamily
}))

const Page = ({ children, theme, config, getParticles }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const windowWidth = window.innerWidth
    setWidth(windowWidth)
    const handleResize = () => setWidth(windowWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getLayoutProps = () => ({
    isMobile: width <= 360
  })

  const childrenWithInjectedTheme = React.Children.map(children, child =>
    child
      ? React.cloneElement(child, {
          theme,
          darkMode,
          setDarkMode,
          ...getLayoutProps()
        })
      : null
  )

  return (
    <Main>
      <SideBar
        theme={theme}
        config={config}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Wrapper theme={theme}>{childrenWithInjectedTheme}</Wrapper>
      <Particles
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          marginTop: '5em',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        params={getParticles(theme)}
      />
      <Global
        styles={css`
          @charset "utf-8";

          *,
          ::after,
          ::before {
            box-sizing: border-box;
          }

          html,
          body {
            width: 100%;
            height: 100%;
            background-color: ${darkMode
              ? theme.colors.darkBackground
              : theme.colors.lightBackground};
            transition: 1s ease;
          }

          body {
            font-family: ${theme.fontFamily}, sans-serif;
            text-rendering: optimizeLegibility !important;
            -webkit-font-smoothing: antialiased !important;
          }

          ::selection {
            background: ${theme.colors.yellow}; /* WebKit/Blink Browsers */
          }

          ::-moz-selection {
            background: ${theme.colors.yellow}; /* Gecko Browsers */
          }

          .react-toggle:hover {
            border-radius: 30px;
            background-color: ${theme.colors.active};
          }

          .react-toggle-track {
            border: 2px solid #26282e;
            background-color: ${theme.colors.active};
          }

          .react-toggle--checked:hover {
            border-radius: 30px;
            background-color: ${theme.colors.inactive};
          }

          .react-toggle--checked .react-toggle-track {
            border-radius: 30px;
            background-color: ${theme.colors.inactive};
          }
        `}
      />
    </Main>
  )
}

Page.defaultProps = {
  isDarkmodeToggable: true
}

export default Page
