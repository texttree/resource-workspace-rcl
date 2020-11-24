import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  .react-grid-item.react-grid-placeholder {
    background-color: ${props => `${props.dragBackgroundColor} !important`};
  }  
`;