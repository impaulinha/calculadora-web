import styled from 'styled-components';

export const ButtonContainer = styled.button`
  flex: 1;
  background-color: var(--secondary);
  border: none;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 22px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  &.operator {
    color: var(--purple);
    font-weight: 900;
  }

  &.number {
    color: var(--white);
    font-weight: bold;
  }

  &.ac {
    color: var(--peach);
    font-weight: 900;
  }
`;
