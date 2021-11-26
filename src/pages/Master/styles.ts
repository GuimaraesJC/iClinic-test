import styled from 'styled-components';

import darthVader from '../../assets/images/darth-vader.png';
import lukeSkywalker from '../../assets/images/luke-skywalker.png';

type Props = {
  master: string
}

export const Container = styled.main<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.master === 'Darth Vader' ? '#2b2b2b' : '#fbfe63'};
  height: 100vh;
  align-items: center;
  position: relative;
`;

export const Button = styled.button<Props>`
  width: 347px;
  height: 56px;
  background: ${props => props.master === 'Darth Vader' ? '#fff' : '#2a2a2a'};
  border: none;
  border-radius: 10px;
  color: ${props => props.master === 'Darth Vader' ? '#2a2a2a' : '#fbfe63'};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-top: 175px;
`;

export const ImageContainer = styled.div<Props>`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
  background: url(${props => props.master === 'Darth Vader' ? darthVader : lukeSkywalker});
  margin-top: 91px;
`;

export const MasterInfo = styled.p<Props>`
  font-size: 36px;
  line-height: 44px;
  color: ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
  margin-top: 38px;

  span {
    font-weight: bold;
  }
`;

export const ReturnContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  color: ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
  position: absolute;
  top: 45px;
  left: 52px;

  transition: filter 0.2s;

  img {
    width: 30px;
    height: 25px;
  }

  span {
    font-size: 18px;
    line-height: 22px;
    margin-left: 10px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
