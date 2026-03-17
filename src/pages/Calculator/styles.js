import styled from 'styled-components';
import backgroundImage from '../../assets/lavender-sprigs.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--background);
    background-image: url(${backgroundImage}), url(${backgroundImage});
    background-position:
      top right,
      bottom left;
    background-repeat: no-repeat, no-repeat;
    background-size: 280px, 280px;

    filter: blur(2px);
    opacity: 0.5;
    z-index: 1;
  }
`;

export const Content = styled.div`
  background-color: var(--white);
  min-height: 60%;
  width: 80%;
  z-index: 2;
  position: relative;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const WaveContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: -60px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .wave-1 {
    fill: var(--primary);
  }

  .wave-body {
    fill: var(--primary);
  }
`;

export const ContainerButtons = styled.div`
  background-color: var(--primary);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 20px;
  border-radius: 0 0 30px 30px;

  .btn-equals {
    grid-row: span 2;
    background-color: var(--purple);
    color: var(--white);
    height: 100%;
  }
`;
