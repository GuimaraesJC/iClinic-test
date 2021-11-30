import styled from 'styled-components';

type ButtonProps = {
  buttonWidth: number;
  font: string;
  label: string;
  master?: string;
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

type ButtonStyle = {
  backgroundColor: string;
  color: string;
}

function getButtonStyle(master: string): ButtonStyle {
  if (!master) {
    return {
      backgroundColor: '#2c97d1',
      color: '#fff',
    };
  }

  return master === 'Darth Vader' ? {
    backgroundColor: '#fff',
    color: '#2a2a2a'
  } : {
    backgroundColor: '#2a2a2a',
    color: '#fbfe63'
  };
}


export const DefaultButton = styled.button<ButtonProps>`
  width: ${props => props.buttonWidth}px;
  height: 56px;
  background: ${props => getButtonStyle(props.master || '').backgroundColor};
  border: none;
  border-radius: 10px;
  color: ${props => getButtonStyle(props.master || '').color};
  font-weight: bold;
  font-size: ${props => fontStyle[props.font].fontSize}px;
  line-height: ${props => fontStyle[props.font].lineHeight}px;
  letter-spacing: ${props => props.label.match(/start/i) && '0.35em'};
`;
