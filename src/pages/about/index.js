import React, { useState } from 'react'
// UI Elements
import { Page } from 'components/layout'
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

const Title = styled.h3(({ theme: { colors } }) => ({
  fontSize: 22,
  color: colors.yellow,
  fontWeight: 'bold',
  paddingBottom: 20
}))

const TextBlock = styled.p(({ theme: { colors } }) => ({
  color: colors.light,
  lineHeight: 1.5
}))

const SkillBar = styled.div(({ theme: { colors }, level, expand }) => ({
  width: expand ? level : 0,
  marginTop: '.5rem',
  height: '1.5rem',
  background: `linear-gradient(to right, ${colors.yellow}, ${colors.darkYellow})`,
  transition: '.5s ease'
}))

const skills = [
  {
    id: 0,
    skill: 'JavaScript',
    level: '99%'
  },
  {
    id: 1,
    skill: 'NodeJS',
    level: '80%'
  },
  {
    id: 1,
    skill: 'Go',
    level: '60%'
  },
  {
    id: 1,
    skill: 'React',
    level: '99%'
  },
  {
    id: 2,
    skill: 'React Native',
    level: '99%'
  },
  {
    id: 1,
    skill: 'Styled Components',
    level: '90%'
  },

  {
    id: 1,
    skill: 'Microservices',
    level: '80%'
  },
  {
    id: 1,
    skill: 'GraphQL',
    level: '75%'
  },
  {
    id: 1,
    skill: 'NoSQL',
    level: '80%'
  },
  {
    id: 1,
    skill: 'DevOps (CI/CD, Docker, Jenkins, Rancher)',
    level: '99%'
  }
]

const SkillInfo = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  padding: '.5rem',
  fontSize: 12
})

const SkillName = styled.span(({ expand }) => ({
  opacity: expand ? 1 : 0
}))

const Level = styled.span(({ expand }) => ({
  fontSize: 11,
  opacity: expand ? 1 : 0
}))

const About = ({ baseContext: { config, theme, getParticles } }) => {
  const [shouldExpand, expandSkillBars] = useState(false)

  setTimeout(() => expandSkillBars(true), 500)

  return (
    <Page theme={theme} config={config} getParticles={getParticles}>
      <Hero src={`${process.env.PUBLIC_URL}/imgs/wide-hero.jpg`} />
      <Wrapper>
        <Content width="50%">
          <Title theme={theme}>SOBRE MIM</Title>
          <TextBlock theme={theme}>
            Olá, Eu sou o Caio e que tal construirmos coisas legais? Sou um
            engenheiro de software com sólidos conhecimentos no desenvolvimento
            de aplicações web e mobile usando JavaScript.
            <br />
            <br />
            Também tenho experiência na utilização tanto do paradigma de
            orientação a objetos tanto quanto funcional, atuo também na
            modelagem de databases relacionais e não relacionais além de
            projetos de arquitetura da informação :)
            <br />
            <br />
            Humanamente falando sou viciado e fascinado na cultura remota e
            flexibilidade de horário, também sou louco por agile (sério, aplico
            isso em tudo!), liberdade, projetos (técnicos ou não! Afinal, a
            escalada é importante mas a vista tb!) orientados a resultados,
            tubarões (brancos em geral) e viajar.
          </TextBlock>
        </Content>
        <Content width="50%">
          <Title theme={theme}>SKILLS</Title>
          {skills.map(({ level, id, skill }) => (
            <SkillBar
              key={id}
              theme={theme}
              level={level}
              expand={shouldExpand}
            >
              <SkillInfo>
                <SkillName expand={shouldExpand}>{skill}</SkillName>
                <Level expand={shouldExpand}>{level}</Level>
              </SkillInfo>
            </SkillBar>
          ))}
        </Content>
      </Wrapper>
    </Page>
  )
}
export default About
