import React from 'react'
// UI Elements
import { Page } from 'components/layout'
import styled from '@emotion/styled'

const Hero = styled.div(({ src }) => ({
  backgroundImage: `url("${src}")`,
  backgroundSize: 'cover',
  backgroundPositionY: -340,
  backgroundRepeat: 'no-repeat',
  height: '25em',
  width: '100%',
  position: 'fixed'
}))

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  marginTop: '27em'
})

const Content = styled.div(({ width }) => ({
  padding: 10,
  width
}))

const Title = styled.h3({
  fontWeight: 'bold',
  paddingBottom: 20
})

const About = ({ baseContext: { config, theme, getParticles } }) => (
  <Page theme={theme} config={config} getParticles={getParticles}>
    <Hero src={`${process.env.PUBLIC_URL}/imgs/wide-hero.jpg`} />
    <Wrapper>
      <Content width="50%">
        <Title>SOBRE MIM</Title>
        <p>
          Olá, Eu sou o Caio e que tal construirmos coisas legais? Sou um
          engenheiro de software com sólidos conhecimentos no desenvolvimento de
          aplicações web e mobile usando JavaScript. Também tenho experiência na
          utilização tanto do paradigma de orientação a objetos tanto quanto
          funcional, atuo também na modelagem de databases relacionais e não
          relacionais além de projetos de arquitetura da informação :)
          Humanamente falando sou viciado e fascinado na cultura remota e
          flexibilidade de horário, também sou louco por agile (sério, aplico
          isso em tudo!), liberdade, projetos (técnicos ou não! Afinal, a
          escalada é importante mas a vista tb!) orientados a resultados,
          tubarões (brancos em geral) e viajar.
        </p>
      </Content>
      <Content width="50%">
        <Title>SKILLS</Title>
        <p>SKILLS BAR</p>
      </Content>
    </Wrapper>
  </Page>
)

export default About
