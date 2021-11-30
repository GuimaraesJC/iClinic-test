import * as S from './styles';

type ButtonProps = {
  label: string;
  size: string;
}

type ButtonSizeOptions = {
  [key: string]: number;
}

const buttonSize: ButtonSizeOptions = {
  'small': 189,
  'large': 347
}

function Button({ label, size }: ButtonProps) {
  return (
    <S.DefaultButton buttonWidth={buttonSize[size]}>
      {label}
    </S.DefaultButton>
  );
}

export default Button;
