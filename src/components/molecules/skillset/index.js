import React from 'react'
import styled from '@emotion/styled'

const SKILLS = [
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
    id: 2,
    skill: 'Go',
    level: '60%'
  },
  {
    id: 3,
    skill: 'React',
    level: '99%'
  },
  {
    id: 4,
    skill: 'React Native',
    level: '99%'
  },
  {
    id: 5,
    skill: 'Styled Components',
    level: '90%'
  },

  {
    id: 6,
    skill: 'Microservices',
    level: '80%'
  },
  {
    id: 7,
    skill: 'GraphQL',
    level: '75%'
  },
  {
    id: 8,
    skill: 'NoSQL',
    level: '80%'
  },
  {
    id: 9,
    skill: 'DevOps (CI/CD, Docker, Jenkins, Rancher)',
    level: '60%'
  }
]

const Wrapper = styled.div(({ width }) => ({
  padding: 10,
  width
}))

const SkillBar = styled.div(
  ({ theme: { colors }, level, expand, darkMode }) => ({
    width: expand ? level : 0,
    marginTop: '.5rem',
    height: '1.8rem',
    background: darkMode
      ? `linear-gradient(to right, ${colors.yellow}, ${colors.darkYellow})`
      : colors.dark,
    color: darkMode ? colors.dark : colors.light,
    transition: '.5s ease'
  })
)

const Title = styled.h3(({ theme: { colors }, darkMode }) => ({
  fontSize: 22,
  color: darkMode ? colors.yellow : colors.dark,
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
  fontSize: 12,
  opacity: expand ? 1 : 0
}))

const Level = styled.span(({ expand }) => ({
  fontSize: 11,
  opacity: expand ? 1 : 0
}))

export default ({ theme, shouldExpand, darkMode }) => (
  <Wrapper width="50%">
    <Title theme={theme} darkMode={darkMode}>
      SKILLS
    </Title>
    {SKILLS.map(({ level, id, skill }) => (
      <SkillBar
        key={id}
        theme={theme}
        level={level}
        expand={shouldExpand}
        darkMode={darkMode}
      >
        <SkillInfo>
          <SkillName expand={shouldExpand}>{skill}</SkillName>
          <Level expand={shouldExpand}>{level}</Level>
        </SkillInfo>
      </SkillBar>
    ))}
  </Wrapper>
)
