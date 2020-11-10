import React from 'react'
import { Container, Dot } from './styled';

function DragHandle({ amount = 6, style, props }) {
  return (
    <Container style={style} {...props}>
      {
        Array(amount).fill(0).map(() => (
          <Dot />
        ))
      }
    </Container>
  )
}

export default DragHandle
