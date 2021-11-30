import styled from "styled-components";

type ButtonProps = {
  buttonWidth: number;
}

export const DefaultButton = styled.button<ButtonProps>`
  width: ${props => props.buttonWidth}px;
  height: 56px;
  background: #2c97d1;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;


// export const Button = styled.button<Props>`
//   width: 347px;
//   height: 56px;
//   background: ${props => props.master === 'Darth Vader' ? '#fff' : '#2a2a2a'};
//   border: none;
//   border-radius: 10px;
//   color: ${props => props.master === 'Darth Vader' ? '#2a2a2a' : '#fbfe63'};
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 20px;
//   margin-top: 175px;

//   @media only screen and (max-width: 800px) {
//     margin-top: 38px;
//   }
// `;
