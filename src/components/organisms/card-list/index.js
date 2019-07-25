import React, { Fragment } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import styled from '@emotion/styled'

// UI Elements
import { Card } from 'components/molecules'
import { SectionTitle } from 'components/atoms'

const Wrapper = styled.section({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'scroll',
  marginLeft: '-.5rem',
  minHeight: '20rem'
})

export default ({
  id,
  dataset,
  error,
  theme: { colors },
  darkMode,
  title,
  cardElement = null
}) => {
  const CardElement = cardElement || Card

  if (error) {
    return (
      <Wrapper>
        <SectionTitle content="Ops, something went wrong...!" />
      </Wrapper>
    )
  }

  return (
    <Fragment>
      <SectionTitle palette={colors}>{title}</SectionTitle>
      <ScrollableAnchor id={id}>
        <Wrapper>
          {dataset.map(card => (
            <CardElement
              data={card}
              key={card.guid}
              palette={colors}
              darkMode={darkMode}
            />
          ))}
        </Wrapper>
      </ScrollableAnchor>
    </Fragment>
  )
}
