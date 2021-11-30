import styled from 'styled-components';

type ButtonProps = {
  buttonWidth: number;
  font: string
}

type FontStyleOptions = {
  [key: string]: {
    fontSize: number;
    lineHeight: number;
  };
}

const fontStyle: FontStyleOptions = {
  'normal': {
    fontSize: 16,
    lineHeight: 20,
  },
  'large': {
    fontSize: 18,
    lineHeight: 22,
  }
}

export const DefaultButton = styled.button<ButtonProps>`
  width: ${props => props.buttonWidth}px;
  height: 56px;
  background: #2c97d1;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  font-size: ${props => fontStyle[props.font].fontSize}px;
  line-height: ${props => fontStyle[props.font].lineHeight}px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;
