import { Container, ContainerButtons, Content, WaveContainer } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [equation, setEquation] = useState('');

  function handleClearAll() {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setEquation('');
  }

  function handleAddNumber(number) {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  }

  function handleSumNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setEquation(`${currentNumber} +`);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setEquation('');
    }
  }

  function handleRemNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setEquation(`${currentNumber} -`);
      setOperation('-');
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setEquation('');
    }
  }

  function handleDivNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setEquation(`${currentNumber} ÷`);
      setOperation('÷');
    } else {
      const rem = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(rem));
      setEquation('');
    }
  }

  function handleMultNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setEquation(`${currentNumber} x`);
      setOperation('x');
    } else {
      const rem = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(rem));
      setEquation('');
    }
  }

  function handlePercentNumbers() {
    if (firstNumber === '0') {
      setCurrentNumber(String(Number(currentNumber) / 100));
    } else {
      const result = (Number(firstNumber) * Number(currentNumber)) / 100;
      setEquation(`${firstNumber} ${operation} ${currentNumber}% =`);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  }

  function handleAddDot() {
    if (!currentNumber.includes('.')) {
      setCurrentNumber((prev) => `${prev}.`);
    }
  }

  function handleDelete() {
    setCurrentNumber((prev) => {
      if (prev.length <= 1) return '0';
      return prev.slice(0, -1);
    });
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
        case '÷':
          handleDivNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        default:
          break;
      }
      setEquation(`${firstNumber} ${operation} ${currentNumber} =`);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} equation={equation} />

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
          <Button label="AC" type="ac" onClick={handleClearAll} />
          <Button label="÷" type="operator" onClick={handleDivNumbers} />
          <Button label="x" type="operator" onClick={handleMultNumbers} />
          <Button label="⌫" type="operator" onClick={handleDelete} />

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

          <Button label="=" className="btn-equals" onClick={handleEquals} />

          <Button label="%" type="number" onClick={handlePercentNumbers} />
          <Button
            label="0"
            type="number"
            onClick={() => handleAddNumber('0')}
          />
          <Button label="." type="number" onClick={handleAddDot} />
        </ContainerButtons>
      </Content>
    </Container>
  );
}
