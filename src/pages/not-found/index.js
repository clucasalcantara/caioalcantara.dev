import React from 'react'
import styled from '@emotion/styled'
// Styles
import './style.css'

const Figure = styled.figure({
  fontSize: document.body.clientWidth >= 360 ? '6px' : '3px'
})

const NotFound = () => (
  <Figure>
    <div className="sad-mac"></div>
    <figcaption>
      <span className="sr-text">Error 404: Not Found</span>
      <span className="e"></span>
      <span className="r"></span>
      <span className="r"></span>
      <span className="o"></span>
      <span className="r"></span>
      <span className="_4"></span>
      <span className="_0"></span>
      <span className="_4"></span>
      <span className="n"></span>
      <span className="o"></span>
      <span className="t"></span>
      <span className="f"></span>
      <span className="o"></span>
      <span className="u"></span>
      <span className="n"></span>
      <span className="d"></span>
    </figcaption>
  </Figure>
)

export default NotFound
