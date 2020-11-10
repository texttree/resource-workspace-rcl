import React from 'react';
import { Container, Title } from './styled';
import DragHandle from '../DragHandle';

export default function Card({ style, children, title, ...other }) {
  return (
    <Container style={style} {...other}>
      <DragHandle className="drag-handle" />
      <Title>{title}</Title>
      {children}
    </Container>
  )
}