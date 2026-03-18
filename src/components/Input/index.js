import { InputContainer } from './styles';

export function Input({ value, equation }) {
  return (
    <InputContainer>
      <input disabled className="input-prev" value={equation} />
      <input disabled value={value} className="input-current" />
    </InputContainer>
  );
}
