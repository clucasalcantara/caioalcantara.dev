import React, { useState } from 'react'
// UI Elements
import { Page } from 'components/layout'
import { SkillSet } from 'components/molecules'
import styled from '@emotion/styled'

const Hero = styled.div(({ src }) => ({
  backgroundImage: `url("${src}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  height: '25rem',
  width: '100%',
  position: 'fixed'
}))

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  marginTop: '24rem',
  padding: '3rem'
})

const Content = styled.div(({ width }) => ({
  padding: 10,
  width
}))

const Title = styled.h3(({ theme: { colors }, darkMode }) => ({
  fontSize: 22,
  color: darkMode ? colors.yellow : colors.dark,
  fontWeight: 'bold',
  paddingBottom: 20
}))

const TextBlock = styled.p(({ theme: { colors }, darkMode }) => ({
  color: darkMode ? colors.light : colors.dark,
  lineHeight: 1.5
}))

const About = ({ AppContext }) => {
  const [shouldExpand, expandSkillBars] = useState(false)

  setTimeout(() => expandSkillBars(true), 500)

  return (
    <AppContext.Consumer>
      {({ theme, darkMode, config: { skills } }) => (
        <Page AppContext={AppContext}>
          <Hero src={`${process.env.PUBLIC_URL}/imgs/wide-hero.jpg`} />
          <Wrapper>
            <Content width="50%" darkMode={darkMode}>
              <Title theme={theme} darkMode={darkMode}>
                SOBRE MIM
              </Title>
              <TextBlock theme={theme} darkMode={darkMode}>
                Olá, Eu sou o Caio e que tal construirmos coisas legais? Sou um
                engenheiro de software com sólidos conhecimentos no
                desenvolvimento de aplicações web e mobile usando JavaScript.
                <br />
                <br />
                Também tenho experiência na utilização tanto do paradigma de
                orientação a objetos tanto quanto funcional, atuo também na
                modelagem de databases relacionais e não relacionais além de
                projetos de arquitetura da informação :)
                <br />
                <br />
                Humanamente falando sou viciado e fascinado na cultura remota e
                flexibilidade de horário, também sou louco por agile (sério,
                aplico isso em tudo!), liberdade, projetos (técnicos ou não!
                Afinal, a escalada é importante mas a vista tb!) orientados a
                resultados, tubarões (brancos em geral) e viajar.
              </TextBlock>
            </Content>
            <SkillSet
              dataset={skills}
              theme={theme}
              shouldExpand={shouldExpand}
              darkMode={darkMode}
            />
          </Wrapper>
        </Page>
      )}
    </AppContext.Consumer>
  )
}
export default About
