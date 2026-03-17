import {
  Container,
  ContainerButtons,
  Content,
  Row,
  WaveContainer,
} from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  function handleClear() {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  function handleAddNumber(number) {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  }

  function handleSumNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  function handleRemNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
    }
  }

  function handleEquals() {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <WaveContainer>
          <svg viewBox="0 0 320 64" preserveAspectRatio="none">
            <path
              d="M0,32 C80,0 160,64 240,32 C280,16 310,40 320,32 L320,64 L0,64 Z"
              className="wave-1"
              opacity="0.6"
            />
            <path
              d="M0,40 C60,20 140,60 220,36 C270,22 300,48 320,40 L320,64 L0,64 Z"
              className="wave-body"
            />
          </svg>
        </WaveContainer>

        <ContainerButtons>
          <Button label="AC" type="ac" onClick={() => handleAddNumber('*')} />
          <Button
            label="/"
            type="operator"
            onClick={() => handleAddNumber('/')}
          />
          <Button label="C" type="operator" onClick={handleClear} />
          <Button
            label="x"
            type="operator"
            onClick={() => handleAddNumber('')}
          />

          <Button
            label="7"
            type="number"
            onClick={() => handleAddNumber('7')}
          />
          <Button
            label="8"
            type="number"
            onClick={() => handleAddNumber('8')}
          />
          <Button
            label="9"
            type="number"
            onClick={() => handleAddNumber('9')}
          />
          <Button label="-" type="operator" onClick={handleRemNumbers} />

          <Button
            label="4"
            type="number"
            onClick={() => handleAddNumber('4')}
          />
          <Button
            label="5"
            type="number"
            onClick={() => handleAddNumber('5')}
          />
          <Button
            label="6"
            type="number"
            onClick={() => handleAddNumber('6')}
          />
          <Button label="+" type="operator" onClick={handleSumNumbers} />

          <Button
            label="1"
            type="number"
            onClick={() => handleAddNumber('1')}
          />
          <Button
            label="2"
            type="number"
            onClick={() => handleAddNumber('2')}
          />
          <Button
            label="3"
            type="number"
            onClick={() => handleAddNumber('3')}
          />

          <Button label="=" className="btn-equals" />

          <Button
            label="%"
            type="number"
            onClick={() => handleAddNumber('1')}
          />
          <Button
            label="0"
            type="number"
            onClick={() => handleAddNumber('2')}
          />
          <Button
            label="."
            type="number"
            onClick={() => handleAddNumber('3')}
          />
        </ContainerButtons>
      </Content>
    </Container>
  );
}
