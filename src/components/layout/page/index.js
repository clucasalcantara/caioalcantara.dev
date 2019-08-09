/**
 * Page Component
 * @memberof components/layout
 */
import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Particles from 'react-particles-js'
// Custom Hooks
import { useWindowWidth } from 'components/hooks'
// UI Elements
import { SideBar } from 'components/molecules'

const Main = styled.div({
  position: 'relative',
  zIndex: '2',
  paddingLeft: '450px'
})

const Wrapper = styled.div(({ theme: { fontFamily } }) => ({
  height: '100%',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: '0 1rem;',
  fontFamily
}))

function Page({ children, AppContext }) {
  const width = useWindowWidth()
  const isMobile = width <= 420

  const childrenWithInjectedContext = React.Children.map(children, child =>
    child ? React.cloneElement(child, { AppContext }) : null
  )

  return (
    <AppContext.Consumer>
      {({ theme, config, getParticlesConfig, darkMode, setDarkMode }) => {
        return (
          <AppContext.Provider
            value={{ theme, config, darkMode, setDarkMode, getParticlesConfig }}
          >
            <Main>
              <SideBar AppContext={AppContext} />
              {!isMobile && (
                <Wrapper theme={theme}>{childrenWithInjectedContext}</Wrapper>
              )}
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
                      ? theme.colors.dark
                      : theme.colors.light};
                    transition: 1s ease;
                  }

                  body {
                    font-family: ${theme.fontFamily}, sans-serif;
                    text-rendering: optimizeLegibility !important;
                    -webkit-font-smoothing: antialiased !important;
                  }

                  strong {
                    font-weight: 800;
                  }

                  ::selection {
                    background: ${theme.colors
                      .yellow}; /* WebKit/Blink Browsers */
                  }

                  ::-moz-selection {
                    background: ${theme.colors.yellow}; /* Gecko Browsers */
                  }

                  .react-toggle:hover {
                    border-radius: 30px;
                    background-color: ${theme.colors.light} !important;
                  }

                  .react-toggle-track {
                    border: 2px solid #26282e;
                    background-color: ${theme.colors.light} !important;
                  }

                  .react-toggle--checked:hover {
                    border-radius: 30px;
                    background-color: ${theme.colors.dark} !important;
                  }

                  .react-toggle--checked .react-toggle-thumb {
                    border-color: transparent;
                  }

                  .react-toggle--checked .react-toggle-track {
                    border-radius: 30px;
                    background-color: ${theme.colors.dark} !important;
                  }
                `}
              />
            </Main>
            {!isMobile && (
              <Particles
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
                params={getParticlesConfig(theme, darkMode)}
              />
            )}
          </AppContext.Provider>
        )
      }}
    </AppContext.Consumer>
  )
}

Page.defaultProps = {
  isDarkmodeToggable: true
}

export default Page
