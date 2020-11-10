import React from 'react';
import { Container, Title, Body } from './styled';
import DragHandle from '../DragHandle';

export default function Card({ style, children, title, ...other }) {
  return (
    <Container style={style} {...other}>
      <Body>
        <DragHandle className="drag-handle" />
        <Title>{title}</Title>
        {children}
      </Body>
    </Container>
  )
}