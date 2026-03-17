import { ButtonContainer } from './styles';

export function Button({ label, onClick, type, className }) {
  return (
    <ButtonContainer
      onClick={onClick}
      className={`${type || ''} ${className || ''}`}
    >
      {label}
    </ButtonContainer>
  );
}
