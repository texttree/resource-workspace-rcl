import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Scaling because there is an issue with border radius of items in this component */
  transform: scale(.4);
  transform-origin: top left;
  max-width: 20px;
  height: min-content;
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 2px;
  background-color: #ECECEC;
  border-radius: 50%;
`;