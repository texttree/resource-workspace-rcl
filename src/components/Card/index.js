import React from 'react';
import { Container, Body } from './styled';

export default function Card({ style, children, ...other }) {
  return (
    <Container style={style} {...other}>
      <Body>
        {children}
      </Body>
    </Container>
  )
}