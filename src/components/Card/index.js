import React from 'react';
import { Container } from './styled';
import DragHandle from '../DragHandle';

export default function Card({ style, children, ...other }) {
  return (
    <Container style={style} {...other}>
      <DragHandle className="drag-handle" />
      {children}
    </Container>
  )
}