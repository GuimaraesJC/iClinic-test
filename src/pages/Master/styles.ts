import styled from 'styled-components';

import darthVader from '../../assets/images/darth-vader.png';
import lukeSkywalker from '../../assets/images/luke-skywalker.png';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #2b2b2b;
  height: 100vh;
  align-items: center;
  position: relative;
`;

export const Button = styled.button`
  width: 347px;
  height: 56px;
  background: #fff;
  border: none;
  border-radius: 10px;
  color: #2a2a2a;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-top: 175px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ImageContainer = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: url(${darthVader});
  margin-top: 91px;
`;

export const MasterInfo = styled.p`
  font-size: 36px;
  line-height: 44px;
  color: #fff;
  margin-top: 38px;

  span {
    font-weight: bold;
  }
`;

export const ReturnContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
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
