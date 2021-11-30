import * as S from './styles';

type ButtonProps = {
  label: string;
  size: string;
  font: string;
  disabled: boolean;
  onClickFn?: () => void;
}

type ButtonSizeOptions = {
  [key: string]: number;
}

const buttonSize: ButtonSizeOptions = {
  'small': 189,
  'large': 347
}


function Button({ label, size, font, disabled, onClickFn }: ButtonProps) {
  return (
    <S.DefaultButton
      buttonWidth={buttonSize[size]}
      font={font}
      disabled={disabled}
      onClick={onClickFn}
    >
      {label}
    </S.DefaultButton>
  );
}

export default Button;
