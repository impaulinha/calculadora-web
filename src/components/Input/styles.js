import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  min-height: 200px;
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 100%;
    border: none;
    text-align: right;
    padding: 2px 25px;
    font-family:
      'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .input-prev {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.3);
    font-weight: 600;
  }

  .input-current {
    color: var(--purple);
    font-size: 45px;
    font-weight: bold;
  }
`;
