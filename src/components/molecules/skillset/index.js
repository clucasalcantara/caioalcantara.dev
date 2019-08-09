import React from 'react'
import styled from '@emotion/styled'

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
    transition: '.8s ease'
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

export default ({ theme, shouldExpand, darkMode, dataset }) => (
  <Wrapper width="50%">
    <Title theme={theme} darkMode={darkMode}>
      SKILLS
    </Title>
    {dataset.map(({ level, id, skill }) => (
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
