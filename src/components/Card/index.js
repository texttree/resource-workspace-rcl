import React from 'react';
import { Container, Body } from './styled';

export default function Card({
  style, children, hide, ...other
}) {
  return (
    <Container hide={hide} style={style} {...other}>
      <Body>
        {children}
      </Body>
    </Container>
  );
}