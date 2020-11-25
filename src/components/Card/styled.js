import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.hide ? 'none' : 'flex'};
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;