import { InputContainer } from './styles';

export function Input({ value }) {
  return (
    <InputContainer>
      <input disabled className="input-prev" value="3 x 4 =" />
      <input disabled value={value} className="input-current" />
    </InputContainer>
  );
}
