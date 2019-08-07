import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ width }) => ({
  padding: 10,
  width
}))

const SkillBar = styled.div(({ theme: { colors }, level, expand }) => ({
  width: expand ? level : 0,
  marginTop: '.5rem',
  height: '1.8rem',
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

const Title = styled.h3(({ theme: { colors } }) => ({
  fontSize: 22,
  color: colors.yellow,
  fontWeight: 'bold',
  paddingBottom: 20
}))

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

export default ({ theme, shouldExpand }) => (
  <Wrapper width="50%">
    <Title theme={theme}>SKILLS</Title>
    {skills.map(({ level, id, skill }) => (
      <SkillBar key={id} theme={theme} level={level} expand={shouldExpand}>
        <SkillInfo>
          <SkillName expand={shouldExpand}>{skill}</SkillName>
          <Level expand={shouldExpand}>{level}</Level>
        </SkillInfo>
      </SkillBar>
    ))}
  </Wrapper>
)
