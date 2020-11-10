import React from 'react'
import { Container, Dot } from './styled';

function DragHandle({ amount = 6, props }) {
  return (
    <Container {...props}>
      {
        Array(amount).fill(0).map(() => (
          <Dot />
        ))
      }
    </Container>
  )
}

export default DragHandle
