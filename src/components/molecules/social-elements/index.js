import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div({
  marginBottom: '.5em'
})

const SocialElement = styled.a({
  padding: '.5em'
})

const SocialElements = ({ accounts }) => (
  <Wrapper>
    {accounts.map(account => (
      <SocialElement href="#" key={account.id}>
        <img src={`img/${account.id}-logo.svg`} alt={account.name} />
      </SocialElement>
    ))}
  </Wrapper>
)

export default SocialElements
